"use client";

import CallToAction from "@/components/CallToAction";
import BackToTopButton from "@/components/BackToTopButton";
import ContactUs from "@/components/ContactUs";

export default function WasteInvaders() {
  return (
    <>
      <div className="hero grid grid-cols-5 ">
        <div className="hero-text col-span-5 md:col-span-2 mt-11 order-last md:order-first">
          <h1 className="uppercase text-7xl font-bold tracking-wide pb-5 bg-hero-pattern bg-cover bg-clip-text  ">
            <span className="text-transparent"> waste invaders </span> to
            highlight wasted licenses{" "}
          </h1>
          <p>
            Edventure were asked to create a fun packed promotion that will
            highlight the huge number of wasted licences that can be on an
            organisations network, licences on recurring fees that are never
            used or in some cases they’re not even aware of having.
          </p>
          <br />
          <p>
            The game was aimed at highlighting the benefits of working with the
            clients partners to utilise their software asset audit tools.
          </p>
        </div>
        <img
          src="/images/lasergun3d.webp"
          alt="3D image of a guy wearing VR set and holding laser guns"
          className="col-span-5 md:col-span-3 updown-animation"
        />
      </div>
      <div className="content mt-32">
        {/* ---------------------------THE GAME--------------------------- */}
        <h2 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
          the{" "}
          <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
            {" "}
            game{" "}
          </span>
        </h2>
        <div className="doodle flex justify-center">
          <img src="/images/doodle.png" alt="doodle" className="w-32 mt-7" />
        </div>
        {/* VISUALISATION */}
        <div className="grid grid-cols-2 my-20 md:my-32 gap-10 md:gap-0">
          <div className="images relative m-auto col-span-2 md:col-span-1">
            <img
              src="/images/hero-pattern-sm.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <video
              playsInline
              webkit-playsInline
              autoPlay
              muted
              loop
              preload="metadata"
              className="w-64 absolute z-10 bottom-0 -rotate-6 rounded-md"
            >
              <source src="/videos/waste-invaders.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="txt w-3/4 m-auto col-span-2 md:col-span-1">
            <h3 className="uppercase text-5xl tracking-wide font-bold mb-5">
              Visualisation and education{" "}
            </h3>
            <p>
              Highlighting the huge number of wasted licenses that needed
              removing on organisation networks was the key visualisation
              component. Using this, Edventure created a space invaders like
              game which allowed users to target and remove old licenses whilst
              avoiding the needed licenses.{" "}
            </p>
          </div>
        </div>
        {/* COMPETITIVE */}
        <div className="grid grid-cols-2 my-32 gap-10 md:gap-0">
          <div className="txt w-3/4 m-auto  col-span-2 md:col-span-1 order-last md:order-first">
            <h3 className="uppercase text-5xl tracking-wide font-bold mb-5">
              competitive edge{" "}
            </h3>
            <p>
              Waste Invaders involved a leader board, which enabled users to
              fight it out for the top prizes. Increasing game hits and return
              rates.{" "}
            </p>
          </div>

          <div className="images relative m-auto col-span-2 md:col-span-1">
            <img
              src="/images/hero-pattern-sm2.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <img
              src="/images/game1-1.webp"
              alt="screenshot of the game"
              className="w-64 absolute z-10 bottom-3 left-8"
            />
          </div>
        </div>
        {/* THE RESULTS */}
        <div className="grid grid-cols-2 my-32 gap-10 md:gap-0">
          <div className="images relative m-auto col-span-2 md:col-span-1">
            <img
              src="/images/hero-pattern-sm3.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <img
              src="/images/game1-2.webp"
              alt="gameplay image"
              className="w-64 absolute z-10 bottom-0"
            />
          </div>
          <div className="txt w-3/4 m-auto col-span-2 md:col-span-1">
            <h3 className="uppercase text-5xl tracking-wide font-bold mb-5">
              the results{" "}
            </h3>
            <p>
              In a competitive marketplace, it's essential to differentiate
              yourself. Our gamification strategies enable you to stand out by
              offering unique, immersive experiences that leave a lasting
              impression on your audience.
            </p>
          </div>
        </div>
      </div>

      <CallToAction />
      <ContactUs />
      <BackToTopButton />
    </>
  );
}
