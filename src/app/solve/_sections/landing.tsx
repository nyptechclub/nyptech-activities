import CountdownDisplay from "@/app/solve/_components/countdown-display";
import { gluten, unbounded } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";

const targetDate = new Date("2024-09-09T00:00:00Z");

export default function LandingSection() {
  return (
    <section className={"px-4 py-20 max-sm:py-12 flex flex-col items-center justify-center"}>
      <div className={"flex flex-col items-center gap-1 text-center"}>
        <div className={"flex items-center gap-2 text-white"}>
          <img className={"size-6"} src={"https://nyptech.vercel.app/assets?id=logo"} alt={"Logo"} />
          <span className={"font-bold text-lg max-sm:text-sm"}>NYP Technopreneurship Club</span>
        </div>
        <span className={"italic text-sm max-sm:text-xs"}>Presents!</span>
      </div>
      <div className={"flex-1 flex flex-col items-center justify-center text-center"}>
        <span className={clsx("uppercase font-bold text-8xl max-sm:text-6xl text-white", unbounded.className)}>
          NYP Solve
        </span>
        <span className={clsx("mt-6 italic text-lg max-sm:text-sm", gluten.className)}>
          Turn your ideas into a startup in 6 weeks. You in?
        </span>
      </div>
      <CountdownDisplay className={"mb-16 max-sm:mb-8"} targetDate={targetDate} />
      <div>
        <Link className={"btn btn-primary"} href={"https://forms.office.com/r/NKdJaJdiMw"}>
          Sign up now!
        </Link>
      </div>
    </section>
  );
}