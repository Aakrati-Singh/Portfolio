import React from "react";
import AboutImg from "../../assets/image2.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white bg-black bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg px-6 py-12 md:py-20 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
        About
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            className="w-60 md:w-80 object-contain rounded-xlh-150"
            src={AboutImg}
            alt="About img"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Frontend */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Frontend Developer
              </h3>
              <p className="text-sm md:text-base leading-relaxed mt-1">
                Hi, I'm a Front-End Developer with a keen eye for design and a
                deep passion for clean, efficient code. I specialize in building
                responsive, accessible, and high-performance web applications
                using React, Tailwind CSS, and modern JavaScript.
              </p>
            </div>
          </div>

          {/* Backend */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Backend Developer
              </h3>
              <p className="text-sm md:text-base leading-relaxed mt-1">
                Hi, I'm a Back-End Developer focused on building reliable and
                scalable web applications. With experience in Node.js, Express,
                MongoDB, and SQL, I enjoy architecting APIs, managing databases,
                and optimizing performance behind the scenes.
              </p>
            </div>
          </div>

          {/* Java */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Software Automation Tester
              </h3>
              <p className="text-sm md:text-base leading-relaxed mt-1">
                Detail-oriented and quality-focused Software Automation Tester
                with hands-on experience in automating web applications using
                Selenium WebDriver with Java. Skilled in writing robust test
                scripts, designing reusable frameworks, and executing end-to-end
                test scenarios to ensure seamless functionality and high
                performance. Adept at working in Agile environments, debugging
                efficiently, and ensuring product quality through consistent
                test coverage and reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
