import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import React, { useState, useEffect } from "react";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
  Campaigns,
} from "./pages";
import { dummyCampaigns } from "./constants/DummyCampaigns";
import { useStateContext } from "./context";

const App = () => {
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

  // Example test with dummy campaigns
  // useEffect(() => {
  //   setIsLoading(true);
  //   setCampaigns(dummyCampaigns);
  //   setIsLoading(false);
  // }, []);

  return (
    <div className="relative min-h-screen pt-[64px] md:pt-[80px] pb-[64px] bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        <Route
          path="/campaigns"
          element={<Campaigns campaigns={campaigns} isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
};

export default App;
