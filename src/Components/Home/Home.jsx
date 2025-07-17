import React from "react";
import avatarImg from "../../assets/image1.png";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hello! I'm Aakrati Singh
        </h1>
        <p className=" text-sm md:text-2xl tracking-tight font-bold ">
          Full-Stack Developer & Software Automation
          Tester.</p><br></br>
          <p className="text-sm md:text-xl tracking-tight"> Designing seamless digital experiences and engineering robust
          solutions — from crafting dynamic web apps with the MERN stack to
          automating software testing for quality at scale. Passionate about
          innovation, efficiency, and turning ideas into reality.
        </p>
        <a
          href="#Footer"
          className="mt-15 inline-flex items-center justify-center gap-2 text-white py-3 px-6 text-sm md:text-base font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          Contact Me
        </a>
        <a
          href="https://drive.google.com/file/d/1E_vOyMldZKTWJZMcMK33Vxzjfp51F971/view?usp=drivesdk"
          target="_blank"
          className="mt-15 ml-6 inline-flex items-center justify-center gap-2 text-white py-3 px-6 text-sm md:text-base font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          Resume
        </a>
      </div>
      <div>
        <img className="w-130" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
