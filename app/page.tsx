import Image from "next/image";
import Link from "next/link";
import { getUserSession } from "./lib/session";

export default async function Home() {
  return (
    <main>
      <h1>Welcome to the Landing Page Dashboard</h1>
      <Link href="/login">Login</Link>
    </main>
  );
}
