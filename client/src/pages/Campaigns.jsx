import React, { useState, useMemo, useEffect } from "react";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { CampaignCardSkeleton } from "../components";

const ITEMS_PER_PAGE = 9;

const Campaigns = ({ campaigns, isLoading }) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil((campaigns?.length || 0) / ITEMS_PER_PAGE);

  const paginatedCampaigns = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = page * ITEMS_PER_PAGE;
    return campaigns.slice(start, end);
  }, [page, campaigns]);

  console.log(" campaigns loading:", isLoading);

  return (
    <div className="min-h-screen">
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={paginatedCampaigns}
        showViewAll={false}
        skeletonCount={9}
        totalCount={campaigns.length}
      />

      {/* Pagination */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12 mb-20">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="
              px-4 py-2 rounded-full border
              disabled:opacity-40
              hover:bg-black hover:text-white
              transition
            "
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`
                w-9 h-9 rounded-full
                ${
                  page === i + 1
                    ? "bg-black text-white"
                    : "border hover:bg-black hover:text-white"
                }
                transition
              `}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="
              px-4 py-2 rounded-full border
              disabled:opacity-40
              hover:bg-black hover:text-white
              transition
            "
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
