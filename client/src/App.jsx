import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import React, { useState, useEffect } from "react";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
  Campaigns,
  HowItWorks,
} from "./pages";
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-[64px] md:pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route
            path="/campaigns"
            element={<Campaigns campaigns={campaigns} isLoading={isLoading} />}
          />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
