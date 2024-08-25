import { unbounded } from "@/lib/fonts";
import clsx from "clsx";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <nav className={"navbar bg-base-300"}>
        <div className={"navbar-start"}>
          <Link className={"btn btn-ghost"} href={"/solve"}>
            <i className={"fa-solid fa-house fa-xl"} />
          </Link>
        </div>
      </nav>
      <main>
        <div className={"mx-auto py-8 container space-y-4"}>
          <h1 className={clsx("mb-4 text-center text-4xl", unbounded.className)}>NYP Solve</h1>
          <p>
            NYP Solve is a 6-Week Incubator Program designed for aspiring student entrepreneurs. The purpose of this
            event is to nurture students with great potential and turn them into success stories. Throughout the 6
            weeks, the Technopreneurship Club will guide students in building out their ideas.
          </p>
          <div>
            <ul className={"list-disc"}>
              <li>
                <b>Date</b>: 9 September - 25 October 2024 (6-Week Run + Finale on 7th week)
              </li>
              <li>
                <b>Venue</b>: Nanyang Polytechnic Block L, FYP Room (subjected to confirmation)
              </li>
            </ul>
            <p className={"mt-1 italic text-xs"}>Registration is to be done via Student Life Academy Only.</p>
          </div>
          <p className={"mt-4 alert alert-info"}>
            <i className={"fa-solid fa-info-circle"}/>
            <span>
            You do not need to commit for the whole 6-week. Every week there will be a progress check and workshops for
            you to attend.
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}