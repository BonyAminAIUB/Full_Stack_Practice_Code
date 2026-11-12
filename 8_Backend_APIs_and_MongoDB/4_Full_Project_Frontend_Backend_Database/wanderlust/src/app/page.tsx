import { Banner } from "@/components/banner";
import { ReadyStartJourney } from "@/components/readyStartJourney";
import { WhatTravelersSay } from "@/components/whatTravelersSay";
import { WhyChooseUs } from "@/components/whyChooseUs";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Banner />
        <WhyChooseUs />
        <WhatTravelersSay />
        <ReadyStartJourney />
      </main>
    </>
  );
}
