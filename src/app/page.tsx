import { Hero } from "@/components/home/Hero";
import { AboutLeVy } from "@/components/home/AboutLeVy";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Commitments } from "@/components/home/Commitments";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutLeVy />
      <Process />
      <Commitments />
      <CTA />
    </>
  );
}
