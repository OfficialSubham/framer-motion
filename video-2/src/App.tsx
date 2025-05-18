import { useState } from "react"
import "./App.css"
import { AnimatePresence, motion } from "motion/react"
function App() {
  const [open, setOpen] = useState(true)
  return (
    <>
      <AnimatePresence>
        {open && <motion.div className='h-screen flex justify-center items-center w-screen ' exit={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)"
        }}
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)"
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <div className="h-[25rem] w-72 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col p-6">
            <h2 className="font-bold text-[12px]">Aceternity UI Components</h2>
            <p className="text-[8px] text-neutral-600 mt-2">A  collection of beautiful UI conponents, let's get on with it</p>

            <div className="flex items-center justify-center">
              <button className="flex gap-1 text-[10px] px-2 py-1 rounded-md  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  mt-4 items-center" onClick={() => {
                setOpen(false)
              }}>
                <img src="../public/vite.svg" className="w-4 h-4" /> Aceternity
                <span className="text-neutral-600 h-3 w-3">X</span>
              </button>
            </div>

            {/* Motion divs here */}

            <div className="bg-gray-100 border border-dashed border-neutral-200 flex-1 mt-3 rounded-lg relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)"
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200"
              >
                <div className="p-4 flex flex-col gap-1">
                  <h1 className="text-[10px] font-bold">
                    Aceternity UI Components
                  </h1>
                  <p className="text-[8px] text-neutral-600">
                    A collection of UI Components
                  </p>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h1 className="text-[10px] font-bold">
                    Aceternity UI Components
                  </h1>
                  <p className="text-[8px] text-neutral-600">
                    A collection of UI Components
                  </p>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h1 className="text-[10px] font-bold">
                    Aceternity UI Components
                  </h1>
                  <p className="text-[8px] text-neutral-600">
                    A collection of UI Components
                  </p>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h1 className="text-[10px] font-bold">
                    Aceternity UI Components
                  </h1>
                  <p className="text-[8px] text-neutral-600">
                    A collection of UI Components
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div >}
      </AnimatePresence>

    </>
  )
}

export default App
