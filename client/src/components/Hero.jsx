// const Hero = () => {
//   return (
//     <section className="w-full min-h-screen py-40 px-2 flex flex-col items-start text-center bg-[#9ACD32]">
//       <h1 className="font-montserrat text-5xl sm:text-7xl font-bold">upLift</h1>

//       <p className="font-poppins mt-8 font-medium text-5xl max-w-xl text-start">
//         Supporting great causes made easy
//       </p>

//       <p className="font-inter mt-8 max-w-xl text-start">
//         We helped over 130 projects. Sign in today and get your idea kicked off
//         or support others kick off their amazing projects.
//       </p>

//       <button className="font-poppins mt-5 px-16 py-3 bg-black text-white rounded-lg">
//         Explore Campaigns
//       </button>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section
      className="
      w-full min-h-screen
      px-4 py-20
      sm:px-8 sm:py-32
      flex flex-col
      items-center sm:items-start
      text-center sm:text-left
      bg-[#9ACD32]
    "
    >
      <h1 className="font-montserrat font-bold text-4xl sm:text-7xl">upLift</h1>

      <p
        className="
        font-poppins font-medium
        mt-6
        text-2xl sm:text-5xl
        max-w-xl
      "
      >
        Supporting great causes made easy
      </p>

      <p
        className="
        font-inter
        mt-6
        text-sm sm:text-base
        max-w-xl
      "
      >
        We helped over 130 projects. Sign in today and get your idea kicked off
        or support others kick off their amazing projects.
      </p>

      <button
        className="
        font-poppins
        mt-8
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
