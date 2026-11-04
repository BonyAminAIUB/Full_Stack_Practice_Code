import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Banner />
      </main>
    </>
  );
}
