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
    "0xDD8F4a12896100ED90e6592451173bDF177e96f1",
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

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        connectWallet,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
