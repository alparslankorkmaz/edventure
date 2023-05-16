import React from "react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {BackToTopButton && (
        <button
          onClick={scrollUp}
          className="text-6xl bg-hero-pattern bg-cover rounded-full text-white fixed bottom-10 right-10 h-16 w-16 z-10  border-4 border-zinc-300 border-t-emerald-500"
        >
          UP!
        </button>
      )}
    </>
  );
}
