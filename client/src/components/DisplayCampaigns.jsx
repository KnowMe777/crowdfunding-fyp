import React from "react";
import { useNavigate } from "react-router-dom";
import { CampaignCardSkeleton, CampaignCard } from "./";
import { v4 as uuidv4 } from "uuid";

const DisplayCampaigns = ({
  title,
  isLoading,
  campaigns = [],
  showViewAll = false,
  skeletonCount = 6,
  totalCount,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state, campaign });
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 mt-16 mb-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-inter text-2xl sm:text-3xl font-bold text-black">
          {title}{" "}
          <span className="text-sm font-extralight">
            ({totalCount ?? campaigns.length})
          </span>
        </h1>
      </div>

      {isLoading && (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <CampaignCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && campaigns.length === 0 && (
        <p className="font-inter text-gray-600">No campaigns found</p>
      )}

      {!isLoading && campaigns.length > 0 && (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={uuidv4()}
              campaign={campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
        </div>
      )}

      {showViewAll && (
        <button
          onClick={() => navigate("/campaigns")}
          className="mt-8 sm:mt-10 mx-auto block bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          View all campaigns
        </button>
      )}
    </section>
  );
};

export default DisplayCampaigns;
