import { unbounded } from "@/fonts";
import clsx from "clsx";

export default function InnovateSection(props: { className?: string }) {
  return (
    <section className={clsx("px-8 flex flex-col items-center justify-center text-center", props.className)}>
      <div className={clsx("mb-4 font-bold text-4xl text-white", unbounded.className)}>Start working on your ideas</div>
      <div className={"max-w-2xl text-lg"}>
        Maybe you want to build an app that helps people find the best food in Singapore. Or maybe you want to build a
        platform that connects people with similar interests. Whatever it is, we&apos;re here to help you figure out how
        to bring your idea to life and into something that matters.
      </div>
    </section>
  );
}