import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-inter text-2xl font-extrabold text-white tracking-tight">
              upLift
            </h3>
            <p className="font-inter mt-4 text-sm text-gray-400 leading-relaxed">
              A transparent, blockchain-powered crowdfunding platform helping
              communities turn ideas into impact.
            </p>
          </div>

          <div>
            <h4 className="font-inter text-sm font-semibold uppercase tracking-wider text-gray-400">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/campaigns" className="hover:text-white transition">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  to="/create-campaign"
                  className="hover:text-white transition"
                >
                  Start a Campaign
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-white transition"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-white transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://sepolia.etherscan.io/address/0x0F89B471e4979227D9D06c5e14843461b73C0838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Smart Contract
                </a>
              </li>
              <li className="hover:text-white transition">Security</li>
              <li className="hover:text-white transition">FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-sm font-semibold uppercase tracking-wider text-gray-400">
              Connect
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="https://github.com/KnowMe777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FiGithub size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:khnhanan5@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FiMail size={16} />
                  Mail
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://www.linkedin.com/in/5-hanan-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FiLinkedin size={16} />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-inter text-xs text-gray-500">
            © {new Date().getFullYear()} upLift. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-400">
            <span className="font-inter hover:text-white transition">
              Privacy Policy
            </span>
            <span className="font-inter hover:text-white transition">
              Terms of Service
            </span>
            <span className="font-inter hover:text-white transition">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
