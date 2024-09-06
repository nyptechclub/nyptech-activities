import { unbounded } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";

export default function SessionSection(props: { className?: string }) {
  return (
    <main className={clsx("px-8 flex flex-col items-center justify-center text-center", props.className)}>
      <div className={clsx("mb-4 font-bold text-4xl text-white", unbounded.className)}>
        Still not convinced? Got questions?
      </div>
      <div className={"max-w-2xl text-lg"}>Join our virtual information sharing session on the 2nd of September.</div>
      <Link
        className={"mt-8 btn btn-primary"}
        href={"https://nyp-sg.zoom.us/j/97124101912?pwd=DL93ZJhICIFw6Ry4vCCibEMbJRf1YV.1"}
      >
        Join now!
      </Link>
    </main>
  );
}