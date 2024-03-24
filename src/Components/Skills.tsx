import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import {
  SiTypescript,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiDotnet,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";

export const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 size={30} color="#E34F26" className="mx-auto mt-2" />,
      desc: "HTML",
      style: "shadow-orange-400",
    },
    {
      icon: <FaCss3 size={30} color="#1572B6" className="mx-auto mt-2" />,
      desc: "CSS",
      style: "shadow-blue-700",
    },
    {
      icon: <FaBootstrap size={30} color="#7952B3" className="mx-auto mt-2" />,
      desc: "BootStrap",
      style: "shadow-purple-600",
    },
    {
      icon: <SiTailwindcss size={30} color="orange" className="mx-auto mt-2" />,
      desc: "Tailwind CSS",
      style: "shadow-orange-500",
    },
    {
      icon: <SiJquery size={30} color="#0769AD" className="mx-auto mt-2" />,
      desc: "JQuery",
      style: "shadow-blue-900",
    },
    {
      icon: <SiJavascript size={30} color="yellow" className="mx-auto mt-2" />,
      desc: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      icon: <SiTypescript size={30} color="#007ACC" className="mx-auto mt-2" />,
      desc: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      icon: <FaAngular size={30} color="#DD0031" className="mx-auto mt-2" />,
      desc: "Angular",
      style: "shadow-red-500",
    },
    {
      icon: <FaReact size={30} color="#61DAFB " className="mx-auto mt-2" />,
      desc: "React",
      style: "shadow-blue-500",
    },
    {
      icon: <SiMysql size={40} color="#4479A1" className="mx-auto mt-2" />,
      desc: "MySql",
      style: "shadow-blue-800",
    },
    {
      icon: <SiDotnet size={30} color="#512BD4" className="mx-auto mt-2" />,
      desc: "C#.Net",
      style: "shadow-purple-700",
    },
    {
      icon: (
        <BiLogoSpringBoot size={30} color="#4CAF50" className="mx-auto mt-2" />
      ),
      desc: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      icon: <FaGithub size={30} color="#F05032" className="mx-auto mt-2" />,
      desc: "GitHub",
      style: "shadow-red-600",
    },
  ];
  return (
    <div
      id="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen pt-20 px-2 pb-2"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col w-full h-full text-white justify-center">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-400 pt-4 inline">
            Skills
          </p>
          <p className="py-4">These are the technologies I've work with:</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center sm:px-0 md">
          {skills.map(({ icon, desc, style }) => (
            <div
              className={
                "shadow-md hover:scale-105 duration-400 py-2 rounded-lg bg-gray-800 justify-center items-center" +
                " " +
                style
              }
            >
              {icon}
              <p className="mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
