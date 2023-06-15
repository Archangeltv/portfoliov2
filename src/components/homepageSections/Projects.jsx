import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section>
      <h1 className="text-4xl  font-semibold text-center ">My Projects</h1>
      <div className=" border-t-4 border-gray-200 my-10 ">
        <IndividualProject name="FINTECH" />
        <hr className="h-1 bg-gray-200 rounded " />
        <IndividualProject name="PEPE WAGMI" />
        <hr className="h-1 bg-gray-200 rounded " />
        <IndividualProject name="BOT" />
        <hr className="h-1 bg-gray-200 rounded " />
      </div>
    </section>
  );
};

const IndividualProject = ({ name }) => {
  const [rotated, setRotated] = useState(false);
  return (
    <Link
      onMouseEnter={() => {
        setRotated(true);
      }}
      onMouseLeave={() => {
        setRotated(false);
      }}
      className={`flex ${
        rotated && "ml-5 text-gray-400 "
      } font-semibold md:text-6xl text-4xl duration-500 items-center justify-between`}
    >
      <h2 className="py-10">{name}</h2>
      <div className={` duration-500 ${rotated && "-rotate-45"}`}>
        <MdArrowForward />
      </div>
    </Link>
  );
};

export default Projects;
