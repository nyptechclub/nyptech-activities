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
        <section className={"px-4 py-20 max-sm:py-12 flex flex-col items-center justify-center"}>
          <div className={"flex flex-col items-center gap-1 text-center text-white"}>
            <div className={"flex items-center gap-2"}>
              <img className={"size-6"} src={"https://nyptech.vercel.app/assets?id=logo"} alt={"Logo"} />
              <span className={"font-bold text-lg max-sm:text-sm"}>NYP Technopreneurship Club</span>
            </div>
            <span className={"italic text-sm max-sm:text-xs text-gray-300"}>Presents!</span>
          </div>
          <div className={"flex-1 flex flex-col items-center justify-center text-center text-white"}>
            <span className={clsx("uppercase font-bold text-8xl max-sm:text-6xl", unbounded.className)}>NYP Solve</span>
            <span className={clsx("mt-6 italic text-lg max-sm:text-sm text-gray-300", gluten.className)}>
            Turn your ideas into a startup in 6 weeks. You in?
            </span>
          </div>
          <CountdownDisplay
            className={"mb-16 max-sm:mb-8 text-white"}
            data={{
              targetDate: new Date("2024-09-09T00:00:00Z"),
            }}
          />
          <div className={"space-x-4"}>
            <Link className={"btn btn-sm btn-primary"} href={"#"}>
              Sign up now!
            </Link>
            <details className={"dropdown dropdown-top"}>
              <summary className={"btn btn-sm btn-outline"}>Learn more!</summary>
              <ul className={"menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"}>
                <li>
                  <Link href={"/solve/about"}>
                    <i className={"fa-solid fa-info-circle"} />
                    About NYP Solve
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://docs.google.com/document/d/1pFx_-gdNnAXBNK2OpTUD1-JfFj5zl8JzdlS10FQRAb0/edit?usp=sharing"
                    }
                  >
                    <i className={"fa-solid fa-calendar"} />
                    6-Week Rundown
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </section>
        {/* <section className={"flex items-center justify-center"}>Another section.</section> */}
      </div>
    </main>
  );
}