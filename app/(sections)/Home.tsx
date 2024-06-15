import React from "react";
import Image from "next/image";
import Avatar from "@/components/images/avatar.png";

const Home = () => {
  return (
    <section
      id="home"
      className="md:h-[80vh] h-[100vh] flex items-center justify-center dark:bg-gray-950 text-gray-50 "
    >
      <div className="container grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4 ">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white max-md:text-center">
            <span className="text-[#3A80EA] space-x-3">Ralph </span>
            <span>Saladino</span>
          </h1>
          <h2 className="text-gray-800 dark:text-white text-2xl font-medium max-md:text-center">
            Frontend Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-[600px] text-lg max-md:text-justify">
            I am a passionate Graduating BSIT student, constantly seeking to
            expand my knowledge in this field. I find the dynamic nature of
            mobile and web development fascinating and enjoy discovering new
            possibilities.
          </p>

          <button className="text-gray-800 dark:text-white">
            <a href="https://utfs.io/f/d5eae390-5d79-4618-945d-ca9203a15408-j85spc..pdf">
              Download CV
            </a>
          </button>
        </div>
        <Image
          src={Avatar}
          width={400}
          height={400}
          alt="Ralph Saladino"
          className="mx-auto rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Home;
