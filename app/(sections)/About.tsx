import React from "react";

const Home = () => {
  return (
    <section
      id="about"
      className=" h-[100vh] flex-col flex items-center justify-center "
    >
      <div className="container flex justify-center">
        <div className="space-y-4 mb-8 text-justify ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            About Me
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-xl max-w-[700px]">
            Hi my name is Ralph Solancho Saladino, A graduating BSIT Student in
            Quezon City University. I am a frontend developer and Mobile
            developer with a passion for creating beautiful functional web
            applications and mobile applications.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-xl max-w-[700px]">
            I have bit experience with flutter native, react native, react js,
            and next js but Im willing to learn more to enhance my skill and
            techstacks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
