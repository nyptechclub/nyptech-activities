import CountdownDisplay from "@/components/countdown-display";
import GalaxyBackground from "@/components/galaxy-background";

export default function Page() {
  return (
    <main>
      <GalaxyBackground>
        <div className={"h-full flex items-center justify-center"}>
          <CountdownDisplay
            data={{
              targetDate: new Date("2024-09-22T00:00:00Z"),
            }}
          />
        </div>
      </GalaxyBackground>
    </main>
  );
}