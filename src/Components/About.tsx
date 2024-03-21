import React from "react";
import { MdCastForEducation, MdWork } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { Bs1CircleFill, Bs2CircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <div
      id="About"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto  justify-center w-full h-full pt-16">
        <div className="pb-4 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" rounded-lg shadow-md p-6">
            <h4 className="flex items-center text-2xl font-bold mb-4 text-gray-200">
              <MdWork className="w-8 h-8 mr-2" />
              Experience
            </h4>
            <div>
              <h5 className="flex flex-row text-lg font-semibold text-gray-400 mb-2">
                <Bs1CircleFill size={30} className="pr-2" /> Myanmar Media
                Linkage
              </h5>

              <p className="text-gray-500">
                I undertook a three-month paid internship as part of a
                collaborative team of three developers for a Bachelor's degree
                project. During this internship, I was responsible for the
                development of a movie website using technologies such as PHP
                Laravel, JavaScript, Bootstrap, MySQL, Git etc...
              </p>
            </div>
            <div className="mt-4">
              <h5 className="flex flex-row text-lg font-semibold text-gray-400 mb-2">
                <Bs2CircleFill size={30} className="pr-2" />
                Global Wave Technology
              </h5>
              <p className="text-gray-500">
                I held the position of a full-stack developer, focusing on
                front-end development with Angular and React, and handling
                back-end development with technologies like .NET and Spring
                Boot. Across numerous outsourced projects involving a diverse
                team of developers, I collaborated closely with cross-functional
                teams, ensuring the timely delivery of high-quality solutions.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-md p-6">
            <h4 className="flex items-center text-2xl font-bold text-gray-300 mb-4">
              <MdCastForEducation className="w-8 h-8 mr-2" />
              Education
            </h4>
            <p className="flex flex-row text-lg text-gray-300">
              <HiAcademicCap size={30} className="pr-2" /> Bachelor of Computer
              Science (<span className="text-sm pt-1">B.C.Sc</span>)
            </p>
            <p className="text-md text-gray-500 italic pl-2">
              University of Computer Studies, Monywa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
