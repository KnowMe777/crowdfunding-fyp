import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { IoIosArrowBack } from "react-icons/io";

const CampaignDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const { address, contract, getCampaigns, donate, getDonations } =
    useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [campaign, setCampaign] = useState(state || null);
  const [donators, setDonators] = useState([]);
  const [amount, setAmount] = useState("");

  const remainingDays = campaign ? daysLeft(campaign.deadline) : 0;

  const fetchCampaign = async () => {
    if (campaign) return;
    if (!contract) return;

    const allCampaigns = await getCampaigns();
    const currentCampaign = allCampaigns.find(
      (c) => String(c.pId) === String(id),
    );

    setCampaign(currentCampaign);
  };

  const fetchDonators = async () => {
    if (campaign && contract) {
      try {
        const data = await getDonations(campaign.pId);
        setDonators(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching donators:", err);
      }
    }
  };

  useEffect(() => {
    fetchCampaign();
  }, [contract, id]);

  useEffect(() => {
    if (campaign?.pId !== undefined) {
      fetchDonators();
    }
  }, [contract, campaign?.pId]);

  const handleDonate = async () => {
    if (!campaign?.pId === undefined) return;

    const amtNum = Number(amount);
    if (!amtNum || amtNum <= 0) return;

    try {
      setIsLoading(true);
      await donate(campaign.pId, amount);
      setAmount("");
      await fetchDonators();
    } catch (err) {
      console.error("Donate failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!campaign)
    return <p className="text-center mt-10">Loading campaign...</p>;

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-6 flex flex-col gap-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start px-1 py-1 rounded-lg text-gray-500 font-medium font-poppins bg-none text-3xl items-start"
      >
        <IoIosArrowBack />
      </button>

      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-xl border border-black/10 shadow-sm"
      />

      <div>
        <h1 className="font-inter text-xl sm:text-2xl md:text-3xl font-bold text-black">
          {campaign.title}
        </h1>
        <p className="font-inter text-gray-500 text-xs sm:text-sm mt-1">
          by{" "}
          <span className="font-inter text-black font-medium">
            {campaign.owner}
          </span>
        </p>
      </div>

      <p className="font-inter text-gray-600 text-sm sm:text-base">
        {campaign.description}
      </p>

      <div className="mt-3">
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
          <span className="font-inter">Raised</span>
          <span className="font-inter">
            {campaign.amountCollected}/{campaign.target} ETH
          </span>
        </div>
        <div className="w-full h-2 sm:h-2.5 bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#9ACD32] rounded-full transition-all"
            style={{
              width: `${calculateBarPercentage(campaign.target, campaign.amountCollected)}%`,
            }}
          />
        </div>
      </div>

      <p className="font-inter text-gray-500 text-xs sm:text-sm mt-1">
        {remainingDays} day{remainingDays !== 1 ? "s" : ""} left
      </p>

      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
        <input
          type="number"
          placeholder="ETH 0.1"
          step={0.01}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="font-inter flex-1 px-2 w-full  sm:px-3 py-2 text-sm sm:text-base border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="button"
          onClick={handleDonate}
          disabled={isLoading}
          className={`w-full sm:w-auto px-4 sm:px-8 py-2 rounded-lg text-white font-medium font-poppins
    ${isLoading ? "bg-gray-600" : "bg-black hover:bg-gray-800"}`}
        >
          {isLoading ? "Processing..." : "Donate"}
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-inter text-md sm:text-lg font-semibold mb-2">
          Donators ({donators.length})
        </h3>
        {donators.length > 0 ? (
          <ul className="space-y-2 max-h-48 sm:max-h-64 overflow-y-auto">
            {donators.map((donator, index) => (
              <li
                key={`${donator.donator}-${index}`}
                className="flex justify-between text-xs sm:text-base bg-[#F9FAF7] px-3 py-2 rounded-md shadow-sm"
              >
                <span className="font-inter text-xs">{donator.donator}</span>
                <span className="font-inter font-bold">
                  {donator.donation} ETH
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">
            No donations yet. Be the first!
          </p>
        )}
      </div>
    </div>
  );
};

export default CampaignDetails;
