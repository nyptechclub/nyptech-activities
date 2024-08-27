import Link from "next/link";

export default function SessionSection() {
  return (
    <main className={"px-8 h-[60%] flex flex-col items-center justify-center text-center"}>
      <div className={"mb-4 font-bold text-4xl text-white"}>Still not convince? Got questions?</div>
      <div className={"max-w-xl text-lg"}>Join our virtual information sharing session on 2nd September.</div>
      <Link className={"mt-8 btn btn-primary"} href={"#"}>Join now!</Link>
    </main>
  );
}