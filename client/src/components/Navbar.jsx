import { Link, NavLink, useNavigate } from "react-router-dom";
import { Home, PlusCircle, User, Folder } from "lucide-react";
import { useStateContext } from "../context";
import { CustomButton } from "./";

const Navbar = () => {
  const navigate = useNavigate();
  const { connectWallet, address } = useStateContext();

  return (
    <>
      {/* ================= DESKTOP TOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-[#9ACD32]">
        <div className="max-w-[1400px] mx-auto h-[80px] px-6 flex items-center justify-between w-full">
          {/* Left section */}
          <div className="flex items-center gap-8">
            <Link className="font-montserrat text-2xl font-extrabold" to="/">
              upLift
            </Link>

            <input
              type="text"
              placeholder="Search for projects"
              className="w-[280px] px-5 py-3 rounded-xl text-sm outline-none"
            />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="font-poppins font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Home
            </NavLink>

            <NavLink
              to="/my-projects"
              className="font-poppins font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              My projects
            </NavLink>

            <NavLink
              to="/profile"
              className="font-poppins font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Profile
            </NavLink>

            <CustomButton
              btnType="button"
              title={address ? "New Campaign" : "Connect"}
              className="font-poppins bg-black text-white px-8 py-2 rounded-lg hover:opacity-90 transition-transform duration-300 hover:scale-105"
              handleClick={() => {
                address ? navigate("create-campaign") : connectWallet();
              }}
            >
              New Campaign
            </CustomButton>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOP BAR (LOGO + SEARCH) ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#9ACD32] md:hidden">
        <div className="h-[64px] px-4 flex items-center gap-16">
          <Link className="font-montserrat text-xl font-bold" to="/">
            upLift
          </Link>

          <input
            type="text"
            placeholder="Search for projects"
            className="flex-1 px-4 py-2 rounded-md text-sm outline-none"
          />
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
      <nav className="fixed bottom-0 left-0 w-full h-[64px] bg-white border-t z-50 flex justify-around items-center md:hidden">
        <NavLink to="/" className="flex flex-col items-center text-xs">
          <Home size={22} />
          Home
        </NavLink>

        <NavLink
          to="/my-projects"
          className="flex flex-col items-center text-xs"
        >
          <Folder size={22} />
          Projects
        </NavLink>

        <NavLink
          to="/create-campaign"
          className="flex flex-col items-center text-xs"
        >
          <PlusCircle size={22} />
          Create
        </NavLink>

        <NavLink to="/profile" className="flex flex-col items-center text-xs">
          <User size={22} />
          Profile
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
