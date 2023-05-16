import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import HowWeWork from "@/components/HowWeWork";
import CallToAction from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto px-3 md:px-32">
      <Header />
      <Hero />
      <Content />
      <HowWeWork />
      <CallToAction />
      <ContactUs />
      <Footer />
    </main>
  );
}
