import Image from "next/image";
import Header from './_components/Header'
import Hero from "./_components/Hero";
import HeroTwo from './_components/HeroTwo'

export default function Home() {
  return (
    <div>
      <Header/>   
      <Hero/>
      <HeroTwo/>
    </div>
  );
}
