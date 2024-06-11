import React from "react";

const Home = () => {
  return (
    <section
      id="contacts"
      className=" max-md:h-[200vh]  h-[100vh] text-gray-50 flex justify-center items-center"
    >
      <div className="container flex justify-center">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-[600px]">
            Id love to hear from you! Feel free to reach out with any questions
            or inquiries.
          </p>
          <div className="space-y-2">
            <p>
              Email:{" "}
              <a href="mailto:ralph.saladino05@gmail.com" className="underline">
                ralph.saladino05@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="#" className="underline">
                +63 09606321944
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="#" className="underline">
                linkedin.com/in/ralph
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/hplar05" className="underline">
                github.com/hplar05
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
