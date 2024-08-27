import { unbounded } from "@/fonts";
import clsx from "clsx";

export default function InnovateSection() {
  return (
    <section className={"px-8 h-full flex flex-col items-center justify-center"}>
      <div className={clsx("mb-4 font-bold text-2xl text-white", unbounded.className)}>
        Start working on your ideas
      </div>
      <div className={"max-w-xl text-lg text-center"}>
        Maybe you want to build an app that helps people find the best food in Singapore. Or maybe you want to
        build a platform that connects people with similar interests. Whatever it is, we&apos;re here to help 
        you figure out how to bring your idea to life and into something that matters.
      </div>
    </section>
  );
}