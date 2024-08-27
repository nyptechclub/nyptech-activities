import { unbounded } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";

export default function HowSection(props: { className?: string }) {
  return (
    <main className={clsx("px-8 flex flex-col items-center justify-center text-center", props.className)}>
      <div className={clsx("mb-4 font-bold text-4xl text-white", unbounded.className)}>
        2 workshops, 2 updates every week
      </div>
      <div className={"max-w-2xl text-lg"}>
        It&apos;s pretty simple! You make your own idea, build it, get feedback, and iterate. We&apos;ll provide you
        with the support that you&apos;ll need.
      </div>
      <Link className={"mt-8 btn btn-primary"} href={"/solve/roadmap"}>
        View roadmap!
      </Link>
    </main>
  );
}