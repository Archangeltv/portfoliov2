import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      {loader && (
        <motion.main
          exit={{ x: -window.innerWidth }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-black place-items-center uppercase grid w-screen h-screen"
        >
          <motion.div
            layout
            className="text-white flex flex-col gap-1 items-end text-4xl md:text-5xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className=" heading text-5xl"
            >
              Aimiuwu
            </motion.h1>
            <div className="flex gap-3">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Victor
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
                className="text-sm grid place-content-center"
              >
                <p>web developer</p>
                <p>software engineer</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Loader;
