import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* Home */}
        <section id="home" className="h-[100vh] flex items-center">
          <div>Home</div>
        </section>

        {/* About */}
        <section id="about" className="h-[100vh] flex items-center">
          <div>About</div>
        </section>

        {/* Projects */}
        <section id="projects" className="h-[100vh] flex items-center">
          <div>Projects</div>
        </section>

        {/* Contacts */}
        <section id="contacts" className="h-[100vh] flex items-center">
          <div>Contacts</div>
        </section>
      </div>
    </main>
  );
}
