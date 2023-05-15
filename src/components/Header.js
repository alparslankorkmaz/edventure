export default function Header() {
  return (
    <>
      <header className="p-5 flex justify-between items-center">
        <img
          src="/images/logo.png"
          alt="EdVenture Logo"
          className="w-40 h-auto"
        />
        <button className="p-6 max-h-4 text-3xl tracking-wider rounded-md bg-hero-pattern bg-cover uppercase text-white font-semibold flex flex-col items-center justify-center">
          contact us
        </button>
      </header>
    </>
  );
}