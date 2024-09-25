import Card_hover_effect from "@/components/card-hover-effect";
import Lamp from "@/components/lamp";
import Image from "next/image";
import Globe from '@/components/globe'
import Hero_highlight from "@/components/hero-highlight";
import Footer from "@/components/floating-dock";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <Lamp/>
       <Card_hover_effect/>
       <Globe/>
       <Hero_highlight/>
       <Footer/>
    </main>
  );
}
