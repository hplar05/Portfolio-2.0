import React from "react";

const Home = () => {
  return (
    <section
      id="about"
      className=" h-[100vh] flex-col flex items-center justify-center "
    >
      <div className="container flex justify-center">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-xl max-w-[700px]">
            I'm a frontend developer with a passion for creating beautiful and
            functional web applications. I have bit experience with flutter
            native, react js, and next js but I'm willing to learn more to
            enhance my skill and techstacks.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-xl max-w-[700px]">
            In my free time, I enjoy exploring new design trends, learning about
            the latest advancements in web development, and contributing to
            open-source projects. I'm always eager to collaborate with others
            and learn from their experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
