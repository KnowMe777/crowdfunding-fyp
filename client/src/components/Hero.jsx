const Hero = () => {
  return (
    <section
      className="
      w-full min-h-screen
      px-5 py-20
      sm:px-8 sm:py-32
      flex flex-col
      items-start
      text-left
      bg-[#9ACD32]
    "
    >
      <h1 className="font-montserrat font-bold text-4xl sm:text-7xl">upLift</h1>

      <p
        className="
        font-poppins font-medium
        mt-3 sm:mt-6
        text-2xl sm:text-5xl
        sm:max-w-xl 
      "
      >
        Supporting great causes made{" "}
        <span className="font-playfair italic">easy</span>
      </p>

      <p
        className="
        font-inter
        mt-3 sm:mt-6
        text-base
        max-w-xl
        whitespace-normal
      "
      >
        We helped over 130 projects get fundings. Sign in today and get your
        idea kicked off or support others kick off their amazing projects.
      </p>

      <button
        className="
        font-poppins
        mt-5 sm:mt-6
        px-10 sm:px-16
        py-3
        bg-black text-white
        rounded-lg
      "
      >
        Explore Campaigns
      </button>
    </section>
  );
};

export default Hero;
