import { unbounded } from "@/lib/fonts";
import clsx from "clsx";

export default function AboutSection() {
  return (
    <main className={"px-8 h-full flex flex-col items-center justify-center"}>
      <div className={clsx("mb-4 font-bold text-2xl text-white", unbounded.className)}>About this Event</div>
      <div className={"max-w-xl text-lg text-center"}>
        NYP Solve is a 6-Week Incubator Program designed for aspiring student entrepreneurs. The purpose of this event
        is to nurture students with great potential and turn them into success stories. Throughout the 6 weeks, the
        Technopreneurship Club will guide students in building out their ideas.
      </div>
      <div className={"mt-8 mb-2 font-bold text-lg text-white"}>When and Where?</div>
      <div className={"text-center"}>
        <p>9 September to 25 October 2024 (6-Week Run + Finale on 7th week)</p>
        <p>Nanyang Polytechnic Block L, FYP Room</p>
      </div>
    </main>
  );
}