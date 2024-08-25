import AboutSection from "@/app/solve/_sections/about";
import LandingSection from "@/app/solve/_sections/landing";
import GalaxyBackground from "@/components/galaxy-background";

export default function Page() {
  return (
    <main className={"relative"} data-theme={"dark"}>
      <div className={"w-full h-dvh absolute z-10"}>
        <GalaxyBackground className={"size-full"} />
      </div>
      <div className={"w-full h-dvh absolute z-20 overflow-y-auto [&>section]:min-h-full"}>
        <LandingSection />
        <AboutSection />
      </div>
    </main>
  );
}