import { motion } from "motion/react";

function App() {
  return (
    <>
      <div
        className="h-screen [perspective::1000px] [transform-style:perserve-3d] w-screen bg-slate-800 flex items-center justify-center "
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255, 255, 255, 0.5) 0.5px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
      >
        <motion.button
          // initial={{
          //   rotate: 180,
          // }}
          // animate={{
          //   rotate: 0,
          // }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          whileHover={{
            rotateX: 20,
            rotateY: 20,
            boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
            color: "rgb(8,112,184)"
          }}
          style={{
            translateZ:  100
          }}
          className="bg-black group text-neutral-900 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.25)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.25)_inset]  px-9 py-3 rounded-2xl relative transition-colors duration-300"
        >
          Subscribe
          <span className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent -bottom-px w-3/4 mx-auto "></span>
          <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent -bottom-px w-3/4 mx-auto blur-sm transition-opacity duration-300"></span>
        </motion.button>
      </div>
    </>
  );
}

export default App;
