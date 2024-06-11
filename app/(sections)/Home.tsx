import React from "react";
import Image from "next/image";
import Avatar from "@/components/images/avatar.png";

const Home = () => {
  return (
    <section
      id="home"
      className="h-[80vh] flex items-center justify-center dark:bg-gray-950 text-gray-50 "
    >
      <div className="container grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white">
            <span className="text-[#3A80EA] space-x-3">Ralph </span>
            <span>Saladino</span>
          </h1>
          <h2 className="text-gray-800 dark:text-white text-2xl font-medium">
            Frontend Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-[600px] text-lg">
            I am a passionate Graduating BSIT student, constantly seeking to
            expand my knowledge in this field. I find the dynamic nature of
            mobile and web development fascinating and enjoy discovering new
            possibilities.
          </p>
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
