import Hero from "@/components/hero.tsx";
import Stack from "@/components/stack.tsx";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full">
        <Hero />
        <Stack />
      </div>
    </main>
  );
}
