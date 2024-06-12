import Hero from "@/components/hero.tsx";
import Stack from "@/components/stack.tsx";
import { Projects } from "@/components/projects";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full">
        <Hero />
        <Stack />
        <Projects />
      </div>
    </main>
  );
}
