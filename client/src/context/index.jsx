import { createContext, useContext } from "react";
import {
  useAddress,
  useContract,
  useContractWrite,
  useConnect,
  metamaskWallet,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x0F89B471e4979227D9D06c5e14843461b73C0838",
  );

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign",
  );

  const address = useAddress();
  const connect = useConnect();
  const metamaskConfig = metamaskWallet();

  const connectWallet = async () => {
    await connect(metamaskConfig);
  };

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign({
        args: [
          address, // owner address
          form.title,
          form.description,
          ethers.utils.parseEther(form.target),
          Math.floor(new Date(form.deadline).getTime() / 1000),
          form.image,
        ],
      });
      console.log("submit success", data);
    } catch (error) {
      console.error("submit failed", error);
    }
  };

  const getCampaigns = async () => {
    if (!contract) return;
    const campaigns = await contract.call("getCampaigns");

    const parsedCampaigns = campaigns.map((campaign, id) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.targetAmount.toString()),
      deadline: campaign.deadline,
      amountCollected: ethers.utils.formatEther(
        campaign.collectedAmount.toString(),
      ),
      image: campaign.image,
      pId: id,
    }));

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address,
    );
    return filteredCampaigns;
  };

  const { mutateAsync: donateToCampaign } = useContractWrite(
    contract,
    "donateToCampaign",
  );

  const donate = async (pId, amount) => {
    return await donateToCampaign({
      args: [pId],
      overrides: {
        value: ethers.utils.parseEther(amount),
      },
    });
  };

  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];
    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }
    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        connectWallet,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
