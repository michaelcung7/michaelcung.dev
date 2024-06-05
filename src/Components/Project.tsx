import React from "react";
// import tictactoe from "../assets/tictactoe.PNG"

export const Project = () => {
  const proj1 = require("../assets/tictactoe.PNG");
  const projects = [
    { id: 1, src: proj1 },
    { id: 2, src: proj1 },
    { id: 3, src: proj1 },
    { id: 4, src: proj1 },
    { id: 5, src: proj1 },
    { id: 6, src: proj1 },
  ];
  return (
    <div
      id="Projects"
      className="w-full sm:h-screen text-white bg-gradient-to-b from-black to-gray-800 pt-20 pb-2"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-3">Check out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg h-40 mb-1"
            >
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-3/4"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-1 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
