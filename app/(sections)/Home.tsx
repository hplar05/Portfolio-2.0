"use client";
import React from "react";
import Image from "next/image";
import Avatar from "@/components/images/avatar.png";
import Formal from "@/components/images/formalno.png";
import { TypeAnimation } from "react-type-animation";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const handlesubmit = () => {
    new Promise((resolve) => setTimeout(resolve, 4000)).then(() => {
      toast.success("Successfully Download!");
    });
  };

  return (
    <section
      id="home"
      className="md:h-[80vh] h-[77vh] flex items-center justify-center dark:bg-gray-950 text-gray-50 "
    >
      <div className="container grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4 ">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white max-md:text-center">
            <span className="text-[#3A80EA] space-x-3">Ralph </span>
            <span>Saladino</span>
          </h1>
          <h2 className="animate-typing text-gray-800 dark:text-white max-sm:text-2xl text-3xl font-medium max-md:text-center">
            <TypeAnimation
              sequence={["Frontend Developer", 3000, "Mobile Developer", 3000]}
              wrapper="span"
              speed={50}
              className="block"
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-[600px] max-sm:text-base text-xl text-justify tracking-tighter">
            I am a passionate Graduating BSIT student, constantly seeking to
            expand my knowledge in this field. I find the dynamic nature of
            mobile and web development fascinating and enjoy discovering new
            possibilities.
          </p>

          <button className="text-gray-800 dark:text-white">
            <a
              href="https://utfs.io/f/256dfa7d-c5b1-4f70-ac55-bca786e372e1-l4a71u.pdf"
              onClick={handlesubmit}
            >
              Download CV
            </a>
          </button>
        </div>
        <Image
          src={Formal}
          width={450}
          height={450}
          alt="Ralph Saladino"
          className="mx-auto rounded-3xl max-md:hidden"
        />
      </div>
    </section>
  );
};

export default Home;
