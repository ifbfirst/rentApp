
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Home</h1>
      <Link href="/properties" className="text-3xl">Go to properties</Link>
      
      
    </main>
  );
}
