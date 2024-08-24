import CountdownDisplay from "@/components/countdown-display";
import GalaxyBackground from "@/components/galaxy-background";
import { unbounded } from "@/lib/fonts";
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
          <div className={"font-bold flex max-sm:flex-col items-center gap-2"}>
            <img className={"size-8 max-sm:size-12"} src={"https://nyptech.vercel.app/assets?id=logo"} alt={"Logo"} />
            <span className={"text-lg text-white"}>NYP Technopreneurship Club Presents</span>
          </div>
          <div className={"flex-1 flex items-center justify-center"}>
            <span
              className={clsx(
                "uppercase font-bold text-center text-8xl max-sm:text-6xl text-white",
                unbounded.className
              )}
            >
              NYP Solve
            </span>
          </div>
          <CountdownDisplay
            className={"mb-16 text-white"}
            data={{
              targetDate: new Date("2024-09-22T00:00:00Z"),
            }}
          />
          <div>
            <Link className={"btn btn-primary"} href={"#"}>
              Signup now!
            </Link>
          </div>
        </section>
        {/* <section className={"flex items-center justify-center"}>Another section.</section> */}
      </div>
    </main>
  );
}