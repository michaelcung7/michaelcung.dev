import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const headers = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Michael</h1>
      </div>
      <ul className="hidden md:flex">
        {headers.map((header) => (
          <li
            key={header.id}
            className="px-4 cursor-pointer capitalize text-gray-500  hover:scale-105 duration-200"
          >
            <Link to={header.link} smooth={true} duration={500}>
              {header.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {headers.map((header) => (
            <li
              key={header.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                to={header.link}
                smooth
                duration={500}
                onClick={() => {
                  setNav(!nav);
                }}
              >
                {header.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
