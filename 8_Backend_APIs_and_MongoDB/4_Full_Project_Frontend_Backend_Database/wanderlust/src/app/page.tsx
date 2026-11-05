import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ReadyStartJourney } from "@/components/readyStartJourney";
import { WhatTravelersSay } from "@/components/whatTravelersSay";
import { WhyChooseUs } from "@/components/whyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Banner />
        <WhyChooseUs />
        <WhatTravelersSay />
        <ReadyStartJourney />
      </main>
      <Footer />
    </>
  );
}
