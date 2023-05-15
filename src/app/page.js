import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Howwework from "@/components/Howwework";

export default function Home() {
  return (
    <main className="container mx-auto px-32">
      <Header />
      <Hero />
      <Content />
      <Howwework />
    </main>
  );
}
