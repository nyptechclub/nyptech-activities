import { unbounded } from "@/fonts";
import clsx from "clsx";

export default function HowSection() {
  return (
    <main className={"px-8 h-[60%] flex flex-col items-center justify-center text-center"}>
      <div className={clsx("mb-4 font-bold text-4xl text-white", unbounded.className)}>
        2 workshops, 2 updates every week
      </div>
      <div className={"max-w-xl text-lg"}>It&apos;s pretty simple!</div>
    </main>
  );
}