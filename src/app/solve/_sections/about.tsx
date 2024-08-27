import { unbounded } from "@/fonts";
import clsx from "clsx";

export default function AboutSection(props: { className?: string }) {
  return (
    <main className={clsx("px-8 flex flex-col items-center justify-center text-center", props.className)}>
      <div className={clsx("mb-4 font-bold text-2xl text-white", unbounded.className)}>About this Event</div>
      <div className={"max-w-xl text-lg"}>
        NYP Solve is a 6-Week Incubator Program designed for aspiring student entrepreneurs. The purpose of this event
        is to nurture students with great potential and turn them into success stories. Throughout the 6 weeks, the
        Technopreneurship Club will guide students in building out their ideas.
      </div>
      <div className={clsx("mt-8 mb-2 font-bold text-lg text-white", unbounded.className)}>When and Where?</div>
      <div>
        <p>Nanyang Polytechnic, BLK L, Level 3, Center of IT Innovation</p>
        <p>9 September to 21 October 2024</p>
      </div>
      <div className={"mx-auto mt-4 max-w-lg text-xs"}>
        <b>Disclaimer</b>: This program does not need you to commit everyday. Meetings & Workshops will be held in the
        afternoon every Monday and Friday, attendance is <b>NOT</b> compulsory, but keep in mind that you are
        responsible for your project&apos;s success, we will simply do our best to support you.
      </div>
    </main>
  );
}