import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";

const App = () => {
  return (
    <div className="relative min-h-screen pt-[64px] md:pt-[80px] pb-[64px] bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      </Routes>
    </div>
  );
};

export default App;
