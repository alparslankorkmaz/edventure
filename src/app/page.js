import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import HowWeWork from "@/components/HowWeWork";
import CallToAction from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="container mx-auto p-3 md:px-32">
      <Header />
      <Hero />
      <Content />
      <HowWeWork />
      <CallToAction />
      <ContactUs />
    </main>
  );
}
