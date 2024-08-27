import { unbounded } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";

export default function SessionSection() {
  return (
    <main className={"px-8 h-[60%] flex flex-col items-center justify-center text-center"}>
      <div className={clsx("mb-4 font-bold text-4xl text-white", unbounded.className)}>
        Still not convinced? Got questions?
      </div>
      <div className={"max-w-2xl text-lg"}>Join our virtual information sharing session on the 2nd of September.</div>
      <Link className={"mt-8 btn btn-primary"} href={"https://calendar.app.google/jxGB8CDUFbmnpgkP6"}>
        Join now!
      </Link>
    </main>
  );
}