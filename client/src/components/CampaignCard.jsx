import React from "react";
import { useNavigate } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate();

  const progressPercentage = Math.min(
    (Number(campaign.amountCollected) / Number(campaign.target)) * 100,
    100,
  );

  return (
    <div
      onClick={() => navigate(`/campaign-details/${campaign.pId}`)}
      className="group cursor-pointer bg-[#F9FAF7] rounded-2xl overflow-hidden border border-black/5 hover:shadow-md transition"
    >
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-[140px] object-cover"
      />

      <div className="p-4">
        <h3 className="font-inter text-base font-semibold text-black truncate">
          {campaign.title}
        </h3>

        <p className="font-inter mt-1 text-sm text-gray-600 line-clamp-2">
          {campaign.description}
        </p>

        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Raised</span>
            <span>
              {campaign.amountCollected}/{campaign.target} ETH
            </span>
          </div>

          <div className="w-full h-1.5 bg-gray-200 rounded-full">
            <div
              className="h-full bg-[#9ACD32] rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="mt-3 flex justify-between text-xs text-gray-500">
          <span>
            By{" "}
            <span className="font-medium text-black">
              {campaign.owner.slice(0, 6)}…
            </span>
          </span>
          <span>#{campaign.pId}</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
