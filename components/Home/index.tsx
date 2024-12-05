import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";

import About from "@/components/Home/_components/About";
import Landing from "@/components/Home/_components/Landing";
import Benefits from "@/components/Home/_components/Benefits";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />

      <Landing />
      <About />
      <Benefits />
    </>
  );
}
