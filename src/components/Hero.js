export default function Hero() {
  const scroll = () => {
    const section = document.querySelector("#contact-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className="hero grid grid-cols-5 ">
        <div className="hero-text col-span-5 lg:col-span-2 mt-11 order-last lg:order-first">
          <h1 className="uppercase text-7xl font-bold tracking-wide pb-5 bg-hero-pattern bg-cover bg-clip-text  ">
            <span className="text-transparent">
              {" "}
              captivate, educate, and attract{" "}
            </span>{" "}
            your target audience through custom gamified experiences.
          </h1>
          <p>
            We are a leading B2B marketing agency that use innovative approaches
            that combine the power of games with strategic marketing techniques
            to create captivating experiences that leave a lasting impact.
          </p>
        </div>
        <img
          src="/images/rocket3d.webp"
          alt="3D girl on a rocket"
          className="col-span-5 lg:col-span-3 updown-animation"
        />
        <button
          onClick={scroll}
          className="lg:hidden uppercase col-span-3 order-last lg:order-first mt-10 p-6 max-h-4 text-3xl tracking-wider rounded-lg bg-hero-pattern bg-cover  text-white font-semibold flex flex-col items-center justify-center"
        >
          Discover your EdVenture
        </button>
      </div>
    </>
  );
}
