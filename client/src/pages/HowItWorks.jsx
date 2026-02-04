import React from "react";

const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        How This Project Works
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          This project is designed to provide a seamless experience for users
          who want to create, explore, and contribute to campaigns or projects.
          It is suitable for both campaign creators and contributors, ensuring
          that every action is tracked, transparent, and secure. By leveraging
          modern web technologies and blockchain integration, the platform
          provides a trustworthy environment where ideas can be turned into
          reality. Users can easily navigate the platform, understand the status
          of each campaign, and interact with projects in a meaningful way.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-700 leading-relaxed">
          To begin using the platform, users first need to create an account or
          connect their crypto wallet. Signing up with an email allows users to
          have a traditional account, whereas connecting a wallet enables
          blockchain-based interactions, ensuring that transactions are secure
          and verifiable. Completing the profile with basic information is
          essential to access all features of the platform. Once signed in,
          users can immediately explore campaigns, create their own, or start
          contributing to projects they are interested in.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Exploring Campaigns</h2>
        <p className="text-gray-700 leading-relaxed">
          After signing in, users can browse through a variety of campaigns and
          projects available on the platform. Each campaign is displayed with
          key information, including the title, description, funding goal,
          deadline, and progress. Users can filter campaigns based on
          categories, popularity, or approaching deadlines, making it easy to
          find projects that align with their interests. Clicking on a campaign
          provides a detailed view, where users can see updates, comments, and
          the contributions made by other users, allowing for informed decisions
          before engaging with a project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Creating a Campaign</h2>
        <p className="text-gray-700 leading-relaxed">
          Users who wish to launch their own campaign can do so by navigating to
          the campaign creation page. Here, they can enter a clear and
          descriptive title, provide a detailed explanation of the project, set
          a funding goal, and define a deadline. Once all the required
          information is submitted, the campaign becomes publicly visible to
          other users. This allows contributors to find and support the project.
          The platform ensures that the campaign information is presented
          clearly and professionally, making it easier for potential donors to
          understand the purpose and significance of the project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Contributing to Campaigns
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Users can contribute to campaigns by selecting a project they are
          interested in and entering the amount they wish to donate or invest.
          Contributions are securely processed, and users receive immediate
          confirmation of their transactions. The platform tracks all
          contributions and displays them on the campaign page, ensuring
          transparency. This allows users to see how close a campaign is to
          reaching its funding goal and to feel confident that their support is
          making a tangible impact. Regular updates from campaign creators keep
          contributors informed about the progress and milestones of the
          project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Tracking Progress</h2>
        <p className="text-gray-700 leading-relaxed">
          Both campaign creators and contributors can monitor progress through a
          dedicated dashboard. Creators can view all donations, track
          milestones, and post updates for contributors. Contributors can review
          their donations, check campaign updates, and see detailed progress
          reports. Notifications are sent for key events, such as reaching
          milestones or approaching deadlines, ensuring that all users stay
          informed. This transparency and accessibility of information fosters
          trust and encourages active participation on the platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Claiming Funds</h2>
        <p className="text-gray-700 leading-relaxed">
          Once a campaign reaches its funding goal, the creator can claim the
          funds securely through the platform. All transactions are verified and
          recorded, providing full accountability. Contributors can review
          completed campaigns and confirm that funds have been appropriately
          distributed. This process ensures trust between creators and
          contributors, and maintains the integrity of the platform. Even if a
          campaign does not reach its goal, the system is designed to handle
          refunds or partial contributions efficiently, guaranteeing a safe and
          reliable experience for all users.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          In summary, this project provides a complete ecosystem for creating,
          contributing to, and managing campaigns. By combining a user-friendly
          interface with secure blockchain-based transactions, it empowers both
          creators and contributors to engage in meaningful projects with
          confidence. Every feature, from account creation to fund claiming, is
          designed to be intuitive, transparent, and efficient, allowing users
          to focus on building and supporting innovative ideas without
          unnecessary complexity.
        </p>
      </section>
    </div>
  );
};

export default HowItWorks;
