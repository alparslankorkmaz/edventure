export default function Footer() {
  return (
    <>
      <div className="relative mt-20">
        <div className="z-0">
          {" "}
          <img src="/images/hero-pattern-footer.webp" alt="pattern" />
        </div>
        <div className="footer bg-[#2D2D2D] rounded-t-3xl p-6 grid grid-cols-2 md:gap-48 items-center absolute z-10 top-10">
          <div className="">
            <img
              src="/images/logo.png"
              alt="Edventure Logo"
              className="w-48 mb-11 m-auto"
            />
          </div>
          <div className="">
            <p className="text-white">
              EdVenture Marketing Agency | © 2023 All Rights Reserved
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
