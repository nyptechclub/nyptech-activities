import CountdownDisplay from "@/components/countdown-display";
import GalaxyBackground from "@/components/galaxy-background";
import Link from "next/link";

export default function Page() {
  return (
    <main data-theme={"dark"}>
      <GalaxyBackground className={"h-dvh"}>
        <div className={"py-28 h-full flex flex-col items-center justify-center"}>
          <span className={"text-white font-bold"}>NYP Technopreneurship Club Presents</span>
          <div className={"flex-1 flex items-center justify-center"}>
            <span className={"text-8xl font-new-amsterdam"}>NYP Solve</span>
          </div>
          <CountdownDisplay
            className={"mb-16 text-white"}
            data={{
              targetDate: new Date("2024-09-22T00:00:00Z"),
            }}
          />
          <span>
            <Link className={"btn btn-primary"} href={"#"}>
              Join now!
            </Link>
          </span>
        </div>
      </GalaxyBackground>
    </main>
  );
}