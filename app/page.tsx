import Image from "next/image";
import Home from "./(sections)/Home";
import About from "./(sections)/About";
import Projects from "./(sections)/Projects";
import Contacts from "./(sections)/Contacts";
import Suggestion from "./(sections)/Suggestion";
import { FloatingButton } from "@/components/FloatingButton";
import Experience from "./(sections)/Experience";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-950 scroll-smooth">
      <div>
        {/* Home */}
        <Home />
        {/* About */}
        <About />
        {/* Experience
        <Experience /> */}
        {/* Projects */}
        <Projects />
        {/* Contacts */}
        <Contacts />
        {/* FloatingButton */}
        <FloatingButton />
      </div>
    </main>
  );
}
