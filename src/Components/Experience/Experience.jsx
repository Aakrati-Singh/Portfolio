import React from "react";
import NullClassLogo from '../../assets/null class.png';
import AltDigitalLogo from '../../assets/Altdigital.png';
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-20">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Skills Section */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:w-1/2 mx-auto">
          {[
            { Icon: FaHtml5, label: "HTML", color: "#E34F26" },
            { Icon: FaCss3, label: "CSS", color: "#1572B6" },
            { Icon: FaReact, label: "React", color: "#61DAFB" },
            { Icon: FaJs, label: "JavaScript", color: "#F7DF1E" },
            { Icon: FaNodeJs, label: "Node.js", color: "#339933" },
            { Icon: FaDatabase, label: "SQL", color: "#E34F26" },
            { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
            { Icon: SiExpress, label: "Express", color: "#ffffff" },
          ].map(({ Icon, label, color }, index) => (
            <span
              key={index}
              className="group relative p-3 bg-zinc-950 flex items-center justify-center rounded-2xl"
            >
              <Icon color={color} size={50} />
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition">
                {label}
              </span>
            </span>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Alt Digital */}
          <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-5">
            <img src={AltDigitalLogo} alt="Alt Digital" className="w-[50px] h-[50px] object-contain" />
            <div className="text-white">
              <h2 className="text-lg font-semibold">Alt-Digital Technologies - Software Automation Testing</h2>
              <p className="text-sm font-light">July 2025 - Present</p>
              <ul className="text-sm mt-2 list-disc list-inside">
                <li>Working as a software automation tester.</li>
                <li>Using Selenium WebDrivers with Java.</li>
              </ul>
            </div>
          </div>

          {/* Null Class */}
          <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-5">
            <img src={NullClassLogo} alt="Null Class" className="w-[50px] h-[50px] object-contain" />
            <div className="text-white">
              <h2 className="text-lg font-semibold">Null Class - Full Stack Web Developer</h2>
              <p className="text-sm font-light">April 2025 - May 2025</p>
              <ul className="text-sm mt-2 list-disc list-inside">
                <li>Worked as a Full Stack Web Developer.</li>
                <li>Used MERN Stack technologies to develop some projects.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

