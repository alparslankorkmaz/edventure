export default function Header() {
  const scroll = () => {
    const section = document.querySelector("#contact-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <header className=" py-5 flex justify-between items-center">
        <img
          src="/images/logo.png"
          alt="EdVenture Logo"
          className="w-48 h-auto mx-auto md:mx-0"
        />
        <button
          onClick={scroll}
          className="hidden p-6 max-h-4 text-3xl tracking-wider rounded-md bg-hero-pattern bg-cover uppercase text-white font-semibold md:flex flex-col items-center justify-center"
        >
          contact us
        </button>
      </header>
    </>
  );
}
