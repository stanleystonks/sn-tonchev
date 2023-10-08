import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import { Separator } from "@/components/ui/separator"
import Competencies from "@/components/Competencies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-6 px-8 lg:px-24">
        <Hero />
        <Separator />
        <Competencies />
        <Separator />
        <Projects />
        <Separator />
        <About />
        <Separator />
        <Contact />
      </main>
    </>
  );
}
