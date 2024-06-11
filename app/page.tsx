import Image from "next/image";
import Home from "./(sections)/Home";
import About from "./(sections)/About";
import Projects from "./(sections)/Projects";
import Contacts from "./(sections)/Contacts";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-gray-950">
      <div>
        {/* Home */}
        <Home />
        {/* About */}
        <About />
        {/* Projects */}
        <Projects />
        {/* Contacts */}
        <Contacts />
      </div>
    </main>
  );
}
