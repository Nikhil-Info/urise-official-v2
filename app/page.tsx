import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentLaunches from "@/components/RecentLaunches";
import FeatureSection from "@/components/FeatureSection";
import Categories from "@/components/Categories";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Navbar />
      <Hero />
      {/* Stacking container — these sections rise OVER the sticky hero */}
      <div className="relative z-10">
        <RecentLaunches />
        <FeatureSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
