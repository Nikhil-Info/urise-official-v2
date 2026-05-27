import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentLaunches from "@/components/RecentLaunches";
import FeatureSection from "@/components/FeatureSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Navbar />
      <Hero />
      <RecentLaunches />
      <FeatureSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
