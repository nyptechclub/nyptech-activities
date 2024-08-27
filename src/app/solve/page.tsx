import AboutSection from "@/app/solve/_sections/about";
import HowSection from "@/app/solve/_sections/how";
import InnovateSection from "@/app/solve/_sections/innovate";
import LandingSection from "@/app/solve/_sections/landing";
import SessionSection from "@/app/solve/_sections/session";
import GalaxyBackground from "@/components/galaxy-background";

export default function Page() {
  return (
    <main className={"relative"} data-theme={"dark"}>
      <div className={"w-full h-dvh absolute z-10"}>
        <GalaxyBackground className={"size-full"} />
      </div>
      <div className={"w-full h-dvh absolute z-20 overflow-y-auto [&>section]:min-h-full"}>
        <LandingSection />
        <InnovateSection />
        <HowSection />
        <SessionSection />
        <AboutSection />
      </div>
    </main>
  );
}