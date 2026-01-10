import React from "react";

const Home = () => {
  return (
    <section
      id="contacts"
      className=" max-md:mt-[90vh] md:my-[300vh]  lg-my-[100vh] text-gray-50 flex justify-center items-center "
    >
      <div className="container flex items-center justify-center">
        <div className="space-y-4 md:mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white max-md:text-center">
            Get in Touch
          </h2>
          <p className=" max-w-[600px] text-gray-800 dark:text-white  max-md:text-justify  tracking-tighter">
            Id love to hear from you! Feel free to reach out with any questions
            or inquiries.
          </p>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              Email:{" "}
              <a href="mailto:ralph.saladino05@gmail.com" className="underline">
                apellidojerelyn@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="#" className="underline">
                +63 09606321944
              </a>
            </p>
            {/* <p>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/ralphforged/"
                className="underline"
              >
                Hp Lar
              </a>
            </p> */}
              {/* <p>
                GitHub:{" "}
                <a href="https://github.com/hplar05" className="underline">
                  Hplar05
                </a>
              </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
