import React from "react";
import { useNavigate } from "react-router-dom";
import { CampaignCardSkeleton, CustomButton } from "./";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 mt-16 mb-10">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-inter text-2xl sm:text-3xl font-bold text-black">
          {title}{" "}
          <span className="text-sm font-extralight">({campaigns.length})</span>
        </h1>
      </div>

      {/* Skeleton loading */}
      {isLoading && (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CampaignCardSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Empty */}
      {!isLoading && campaigns?.length === 0 && (
        <p className="font-inter text-gray-600">No campaigns found</p>
      )}

      {/* Grid */}
      <div
        className="
          grid gap-5
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {!isLoading &&
          campaigns?.map((campaign) => (
            <div
              key={campaign.projectId}
              onClick={() =>
                navigate(`/campaign-details/${campaign.projectId}`)
              }
              className="
                group cursor-pointer
                bg-[#F9FAF7]
                rounded-2xl
                overflow-hidden
                border border-black/5
                hover:shadow-md
                transition
              "
            >
              {/* Image */}
              <img
                src={campaign.image}
                alt={campaign.title}
                className="
                  w-full h-[140px]
                  object-cover
                "
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="font-inter text-base font-semibold text-black truncate">
                  {campaign.title}
                </h3>

                <p className="font-inter mt-1 text-sm text-gray-600 line-clamp-2">
                  {campaign.description}
                </p>

                {/* Progress */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span className="font-inter">Raised</span>
                    <span className="font-inter">
                      {campaign.amountCollected}/{campaign.target} ETH
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-[#9ACD32] rounded-full"
                      style={{
                        width: `${Math.min(
                          (Number(campaign.amountCollected) /
                            Number(campaign.target)) *
                            100,
                          100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                  <span>
                    By{" "}
                    <span className="font-inter font-medium text-black">
                      {campaign.owner.slice(0, 6)}…
                    </span>
                  </span>

                  <span className="font-inter">#{campaign.projectId}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      <button
        onClick={() => navigate("/campaigns")}
        className="
    mt-8 sm:mt-10 mx-auto block
    bg-black text-white
    px-6 py-3 rounded-xl
    hover:opacity-90
    transition
  "
      >
        View all campaigns →
      </button>
    </section>
  );
};

export default DisplayCampaigns;
