import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Proj1 from "@/components/images/project1.png";
import Proj2 from "@/components/images/project2.png";
import Proj3 from "@/components/images/project3.png";

const Home = () => {
  return (
    <section id="projects" className="h-[100vh] w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-[600px] max-sm:text-xl text-lg max-md:text-justify  tracking-tighter">
              Check out some of my recent projects that showcase my skills and
              expertise. But if you want to see all my project click{" "}
              <a
                href="https://github.com/hplar05?tab=repositories"
                className="underline "
              >
                <span>here</span>
              </a>
              .
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <Image
              src={Proj2}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Ranimeflixx</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A mobile application that you can watch all streaming anime with
                no ads.
              </p>
            </CardContent>
          </Card>

          <Card className="flex-col flex items-center">
            <Image
              src={Proj1}
              width="390"
              height="300"
              alt="Project 1"
              className="object-cover"
            />

            <CardContent className="p-4">
              <h3 className="text-lg font-bold">The Gym Street Coach</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A mobile app that helps coach to track their clients fitness
                goals and progress.
              </p>
            </CardContent>
          </Card>
          <Card>
            <Image
              src={Proj3}
              width="500"
              height="400"
              alt="Project 3"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">AGreenNatureConnect</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A web app that helps farmers to connect with the people about
                urban farming. This is our capstone system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Home;
