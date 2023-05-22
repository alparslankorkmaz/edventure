"use client";

import Hero from "@/components/Hero";
import Content from "@/components/Content";
import How from "@/components/How";
import OurWork from "@/components/OurWork";
import CallToAction from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <How />
      <OurWork />
      <CallToAction />
      <ContactUs />
      <BackToTopButton />
    </main>
  );
}
