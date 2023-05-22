import Link from "next/link";

export default function OurWork() {
  return (
    <>
      {" "}
      <div className="mb-20 md:mb-44">
        <h2 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
          some of our{" "}
          <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
            work
          </span>
        </h2>
        <div className="doodle flex justify-center">
          <img
            src="/images/doodle.png"
            alt="doodle"
            className="w-32 mt-7 mb-32"
          />
        </div>
        {/* --------------GAMES------------- */}
        <div className="our-work grid grid-cols-3 gap-20">
          {/* SPACE INVADERS */}
          <div className="images relative m-auto col-span-3 md:col-span-1 ">
            <Link href="/waste-invaders">
              <img
                src="/images/hero-pattern-sm3.webp"
                alt="EdVenture Pattern"
                className="w-64 z-0"
              />
              <img
                src="/images/waste-invaders.png"
                alt="Waste Invaders game"
                className="w-64 absolute z-10 bottom-0"
              />
            </Link>
          </div>
          {/* GAME 2 */}
          <div className="images relative m-auto col-span-3 md:col-span-1 ">
            <img
              src="/images/hero-pattern-sm.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <div className="w-64 absolute z-10 bottom-10 text-center m-auto bg-game-blue bg-opacity-30 p-10 rounded-lg text-white font-bold">
              {" "}
              Coming soon!
            </div>
            {/* <img
              src="/images/img2.webp"
              alt="Young People"
              className="w-64 absolute z-10 bottom-0"
            /> */}
          </div>
          {/* GAME 3 */}
          <div className="images relative m-auto col-span-3 md:col-span-1 ">
            <img
              src="/images/hero-pattern-sm3.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <div className="w-64 absolute z-10 bottom-10 text-center m-auto bg-game-blue bg-opacity-30 p-10 rounded-lg text-white font-bold">
              {" "}
              Coming soon!
            </div>

            {/* <img
              src="/images/img1.png"
              alt="Young People"
              className="w-64 absolute z-10 bottom-0"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
