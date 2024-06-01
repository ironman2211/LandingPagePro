import Link from "next/link";
import BaseStructue from "./components/common/common";

export default async function Home() {
  return (
    <BaseStructue>
      <h1 className="text-6xl font-bold font-family mt-10 ">Welcome</h1>
      <span className="font-[Oswald] text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-400 to-blue-500">
        Landing Page Pro
      </span>
      <span className="w-[80vw] md:w-[50vw] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur
        eos ipsum rerum adipisci veritatis nesciunt et esse facere vero ea, ut
        alias dicta asperiores rem assumenda obcaecati odit magni consequatur
        facilis tenetur animi illum temporibus? Nesciunt atque, sed, quod
        quibusdam quisquam ipsam similique ut placeat exercitationem dolore,
        harum alias.
      </span>
      <Link
        href="/login"
        className="bg-cyan-400 py-2 px-7 rounded-full font-bold outline-none "
      >
        Login
      </Link>
    </BaseStructue>
  );
}
