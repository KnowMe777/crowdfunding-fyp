import React from "react";

const CampaignCardSkeleton = () => {
  return (
    <div
      className="
        bg-[#F9FAF7]
        rounded-2xl
        overflow-hidden
        border border-black/5
        animate-pulse
      "
    >
      <div className="w-full h-[140px] bg-gray-200" />

      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />

        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-10 bg-gray-200 rounded" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full" />
        </div>

        <div className="flex justify-between">
          <div className="h-3 w-20 bg-gray-200 rounded" />
          <div className="h-3 w-8 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CampaignCardSkeleton;
