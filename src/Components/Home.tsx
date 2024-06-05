import React from "react";
// import profile from "../assets/profile.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const Home = () => {
  // const profile = require("../assets/profile.jpg");
  const profile =
    "https://raw.githubusercontent.com/hasibul-hasan-shuvo/hasibul-hasan-shuvo/main/images/coding-boy.gif";
  return (
    <div
      id="Home"
      className="sm:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-16 sm:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4>Hello! I'm Michael Cung.</h4>
          <h2 className="text-4xl sm:text-7xl font-bold text-white md:text-7xl">
            I'm a Full Stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Experienced and dedicated web developer with over three years of
            proven expertise in the industry. Seeking a challenging web
            developer position to leverage my skills and experience in crafting
            innovative and user-centric websites. Eager to contribute to a
            collaborative team environment, fostering learning opportunities and
            professional growth.
          </p>

          <div>
            <Link to="About" smooth={true} duration={500}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                More About Me
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3  md:h-80 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
