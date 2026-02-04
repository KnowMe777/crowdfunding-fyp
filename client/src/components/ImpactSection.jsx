import React from "react";
import { FiDollarSign, FiUsers, FiTarget, FiShield } from "react-icons/fi";

const impactStats = [
  {
    title: "Funds Raised",
    value: "$120K+",
    description: "Raised for verified causes",
    icon: FiDollarSign,
  },
  {
    title: "People Supported",
    value: "3,500+",
    description: "Lives positively impacted",
    icon: FiUsers,
  },
  {
    title: "Campaigns Funded",
    value: "180+",
    description: "Successfully completed projects",
    icon: FiTarget,
  },
  {
    title: "On-chain Transparency",
    value: "100%",
    description: "Trackable blockchain donations",
    icon: FiShield,
  },
];

const ImpactSection = () => {
  return (
    <section className="py-36 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Make Your Impact Count
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent, community-powered crowdfunding that turns contributions
            into real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition bg-gradient-to-r" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#9ACD32] text-white mb-5">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {stat.title}
                  </p>

                  <p className="mt-3 text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
