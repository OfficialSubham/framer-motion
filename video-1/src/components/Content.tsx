import { motion } from "motion/react";
const Content = () => {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] w-full h-screen bg-neutral-950 flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        // initial={{
        //   rotate: 0,
        // }}
        // animate={{
        //   rotate: [0, 180, 0, 12, 10, 180, 12, 11, 60, 23, 0],
        // }}
        // transition={{
        //   duration:2,
        //   ease: "easeInOut"
        // }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -10
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        whileTap={{
          y: 0,
          rotateX: 0,
          rotateY: 0
        }}
        style={{
          translateZ: 200,
        }}
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Hello
        </span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] transition-opacity duration-300 w-3/4 mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
};

export default Content;
