import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Approach from "@/components/Approach";
import Research from "@/components/Research";
import Team from "@/components/Team/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Vision />
        <Approach />
        <Research />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}