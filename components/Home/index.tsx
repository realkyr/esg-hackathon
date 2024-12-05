import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";

import About from "@/components/Home/_components/About";
import Landing from "@/components/Home/_components/Landing";
import Benefits from "@/components/Home/_components/Benefits";
import Roadshow from "@/components/Home/_components/Roadshow";
import Footer from "@/components/Footer";
import BottomBanner from "@/components/BottomBanner";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />

      <Landing />
      <About />
      <Benefits />
      <Roadshow />

      <Footer />
      <BottomBanner />
    </>
  );
}
