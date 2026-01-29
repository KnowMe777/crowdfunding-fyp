import React, { useState, useEffect } from "react";
import { Hero, DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import { dummyCampaigns } from "../constants/DummyCampaigns";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="">
      <DisplayCampaigns
        title="Your Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
        showViewAll={false}
      />
    </div>
  );
};

export default Profile;
