import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Typed from "typed.js";
import Projects from "../components/homepageSections/Projects";
import { MdArrowDownward } from "react-icons/md";

const HomePage = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = formatDateTime(now);
      const timezone = getTimezone(now);

      setDateTime(`${formattedDateTime} (GMT${timezone})`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDateTime = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };

    return date.toLocaleString(undefined, options);
  };

  const getTimezone = (date) => {
    const offset = date.getTimezoneOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset > 0 ? "-" : "+";

    return `${sign}${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="padding  text-white"
      >
        <p className="w-full text-end mt-[5rem]">{dateTime}</p>
        <Hero />
        <Projects />
      </motion.main>
    </>
  );
};

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["SOFTWARE", "FRONTEND"],
      typeSpeed: 100,
      loop: true,
      showCursor: false,
      backSpeed: 90,
      backDelay: 1000,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className=" h-[calc(100vh - 120px)] flex-col flex  py-36 lg:py-20 ">
      <div className=" text-5xl sm2:text-[55px] smm:text-6xl md:text-[115px] lg:text-[90px] lg:text-center w-full font-bold text-gray-200 ">
        <p className="lg:text-center">I'M A</p>
        <h1>
          '<span ref={textRef}></span> DEVELOPER
        </h1>
        <p className="text-xl font-medium">BASED IN NIGERIA</p>
      </div>
      <div className="  ">
        <p className="text-xl font-normal flex items-center gap-3 mt-32 ">
          Scroll to see my Projects
          <span className=" animate-bounce ">
            <MdArrowDownward />
          </span>
        </p>
      </div>
    </main>
  );
};

export default HomePage;
