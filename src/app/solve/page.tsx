import CountdownDisplay from "@/components/countdown-display";
import GalaxyBackground from "@/components/galaxy-background";
import { cus as gluten, unbounded } from "@/lib/fonts";
import clsx from "clsx";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"relative"} data-theme={"dark"}>
      <div className={"w-full h-dvh absolute z-10"}>
        <GalaxyBackground className={"size-full"} />
      </div>
      <div className={"w-full h-dvh absolute z-20 overflow-y-auto [&>section]:min-h-full"}>
        <section className={"px-4 py-20 flex flex-col items-center justify-center"}>
          <div className={"flex flex-col items-center gap-1 text-center text-white"}>
            <div className={"flex items-center gap-2"}>
              <img className={"size-6"} src={"https://nyptech.vercel.app/assets?id=logo"} alt={"Logo"} />
              <span className={"font-bold text-lg max-sm:text-sm"}>Technopreneurship Club</span>
            </div>
            <span className={"text-sm max-sm:text-xs text-gray-200"}>Presents...</span>
          </div>
          <div className={"flex-1 flex flex-col items-center justify-center text-center text-white"}>
            <span className={clsx("uppercase font-bold text-8xl max-sm:text-6xl", unbounded.className)}>
              NYP Solve
            </span>
            <span className={clsx("mt-6 italic text-lg max-sm:text-sm text-gray-200", gluten.className)}>
              Dream Big. Solve Bigger.
            </span>
          </div>
          <CountdownDisplay
            className={"mb-16 text-white"}
            data={{
              targetDate: new Date("2024-09-09T00:00:00Z"),
            }}
          />
          <div>
            <Link className={"btn btn-info"} href={"#"}>
              Sign up now!
            </Link>
          </div>
        </section>
        {/* <section className={"flex items-center justify-center"}>Another section.</section> */}
      </div>
    </main>
  );
}