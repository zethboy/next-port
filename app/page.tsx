import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[800px] gap-20">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
