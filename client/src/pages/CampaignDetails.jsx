// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { ethers } from "ethers";
// import { useStateContext } from "../context";
// import { CustomButton } from "../components";
// import { calculateBarPercentage, daysLeft } from "../utils";

// const CampaignDetails = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { address, contract, getDonations } = useStateContext;
//   const [amount, setAmount] = useState("");
//   const [donators, setDonators] = useState([]);
//   const state = useLocation;
//   const remainingDays = daysLeft(state.deadline);

//   return <div>CampaignDetails</div>;
// };

// export default CampaignDetails;
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";

const CampaignDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { address, contract, getCampaigns, donate, getDonations } =
    useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [campaign, setCampaign] = useState(location.state || null);
  const [donators, setDonators] = useState([]);
  const [amount, setAmount] = useState("");

  const remainingDays = campaign ? daysLeft(campaign.deadline) : 0;

  const fetchCampaign = async () => {
    if (!campaign && contract) {
      try {
        const allCampaigns = await getCampaigns();
        const currentCampaign = allCampaigns.find(
          (c) => String(c.projectId) === String(id),
        );
        setCampaign(currentCampaign);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      }
    }
  };

  const fetchDonators = async () => {
    if (campaign && contract) {
      try {
        const data = await getDonations(campaign.projectId);
        setDonators(data);
      } catch (err) {
        console.error("Error fetching donators:", err);
      }
    }
  };

  useEffect(() => {
    fetchCampaign();
  }, [contract, id]);

  useEffect(() => {
    fetchDonators();
  }, [contract, campaign]);

  const handleDonate = async () => {
    if (!campaign || !amount) return;
    setIsLoading(true);
    try {
      await donate(campaign.projectId, amount);
      setAmount("");
      fetchDonators();
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  if (!campaign)
    return <p className="text-center mt-10">Loading campaign...</p>;

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-6 flex flex-col gap-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="font-poppins text-sm sm:text-base text-white bg-black p-2 py-5 rounded-xl hover:text-black transition self-start"
      >
        ← Back
      </button>

      {/* Campaign Image */}
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-xl border border-black/10 shadow-sm"
      />

      {/* Title & Owner */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          {campaign.title}
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          by{" "}
          <span className="text-black font-medium">
            {campaign.owner.slice(0, 6)}…
          </span>
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base">
        {campaign.description}
      </p>

      {/* Progress / Target */}
      <div className="mt-3">
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
          <span>Raised</span>
          <span>
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

      {/* Remaining Days */}
      <p className="text-gray-500 text-xs sm:text-sm mt-1">
        {remainingDays} day{remainingDays !== 1 ? "s" : ""} left
      </p>

      {/* Donate Section */}
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
        <input
          type="number"
          placeholder="ETH 0.1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <CustomButton
          title={isLoading ? "Processing..." : "Donate"}
          onClick={handleDonate}
          disabled={isLoading}
          className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base"
        />
      </div>

      {/* Donators */}
      <div className="mt-6">
        <h3 className="text-md sm:text-lg font-semibold mb-2">
          Donators ({donators.length})
        </h3>
        {donators.length > 0 ? (
          <ul className="space-y-2 max-h-48 sm:max-h-64 overflow-y-auto">
            {donators.map((donator, index) => (
              <li
                key={`${donator.donator}-${index}`}
                className="flex justify-between text-sm sm:text-base bg-[#F9FAF7] px-3 py-2 rounded-md shadow-sm"
              >
                <span>{donator.donator.slice(0, 6)}…</span>
                <span>{donator.donation} ETH</span>
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
