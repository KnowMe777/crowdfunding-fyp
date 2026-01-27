import React, { useState, useEffect } from "react";
import { Hero, DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import { dummyCampaigns } from "../constants/DummyCampaigns";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="">
      <Hero />
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={dummyCampaigns.slice(0, 6)}
      />
    </div>
  );
};

export default Home;
