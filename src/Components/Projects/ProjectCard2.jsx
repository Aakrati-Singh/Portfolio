import React from "react";
import bannerImg2 from "../../assets/bannerImg2.png";
import { FaPlay, FaGithub } from "react-icons/fa";
const ProjectCard2 = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 h-67" src={bannerImg2} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {/* Demo Button */}
              <a
                href="https://github.com/Aakrati-Singh/You_Tube"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white py-2 px-5 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <FaPlay />
                Demo
              </a>
      
              {/* Source Code Button */}
              <a
                href="https://github.com/Aakrati-Singh/You_Tube"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white py-2 px-5 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-gray-700 to-black hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <FaGithub />
                Source Code
              </a>
            </div>
    </div>
  );
};

export default ProjectCard2;
