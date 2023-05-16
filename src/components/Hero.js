export default function Hero() {
  return (
    <>
      <div className="hero grid grid-cols-3 ">
        <div className="hero-text col-span-1 mt-11">
          <h1 className="uppercase text-7xl font-bold tracking-wide pb-5">
            <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
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
          className="col-span-2 mt-0 updown-animation"
        />
      </div>
    </>
  );
}
