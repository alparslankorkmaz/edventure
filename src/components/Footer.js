export default function Footer() {
  return (
    <>
      <div>
        <div className="relative mt-20">
          <div className="z-0">
            {" "}
            <img
              src="/images/hero-pattern-footer.webp"
              alt="pattern"
              className=""
            />
          </div>
          <div className="footer w-full bg-[#2D2D2D] rounded-t-3xl p-6 grid md:grid-cols-2 md:gap-44 items-center absolute z-10 top-10 md:bottom-0 md:top-10">
            <div className="flex m-auto">
              <img
                src="/images/logo.png"
                alt="Edventure Logo"
                className="w-48"
              />
            </div>
            <div className="">
              <p className="text-white text-center md:text-right mt-8 md:mt-0">
                EdVenture Marketing Agency | © 2023 All Rights Reserved
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
