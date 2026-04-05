import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoMenu from "@/components/BentoMenu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col bg-zinc-950 font-sans">
      <Navbar />
      <Hero />
      <BentoMenu />
      <Footer />
    </main>
  );
}
