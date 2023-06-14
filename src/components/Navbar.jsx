import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import Hamburger from "./Hamburger";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`padding duration-500  text-white shadow items-center flex justify-between py-2 md:py-4 `}
      >
        <h1 className="text-2xl z-10 mix-blend-difference font-semibold">
          Archangel
        </h1>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key={isOpen}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, duration: 0.3 },
                  y: 0,
                },
                hidden: window.innerWidth < 768 && { y: -window.innerHeight },
              }}
              transition={{ duration: 0.5 }}
              className="flex font-semibold md:h-auto md:py-0 md:relative h-screen left-0 md:bg-transparent bg-gray-200 py-4 pb-6 text-black items-center justify-center md:text-white absolute top-0 text-center flex-col md:flex-row text-2xl opacity-1 md:font-medium w-full gap-16 md:gap-8 lg:gap-16 "
            >
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -50 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/">Works</Link>
              </motion.li>
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -60 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/">Snippet</Link>
              </motion.li>
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -70 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/">Contact me</Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="z-10">
          <Hamburger
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            isOpen={isOpen}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
