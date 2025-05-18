import { useState } from 'react'
import './App.css'
import { AnimatePresence, motion } from "motion/react"
function App() {
  const [open, setOpen] = useState(false)
  const [elements, setElements] = useState([
    "Home",
    "Statistics",
    "Profile",
    "Setting"
  ])

  const sidebarVarient = {
    open: {
      width: "15rem",
    },
    closed: {
      width: "3rem"
    }
  }

  const childVarients = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: -10
    }
  }

  const parentVarient = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.01
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  return (
    <>
      <div className='w-screen h-screen bg-gray-700'>
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          exit={"closed"}
          /* variants={sidebarVarient} */
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className={`h-full flex flex-col pt-5 bg-white`} style={{
            width: open ? "15rem" : "3rem",
            paddingLeft: open ? "10px" : ''
          }}>

          <motion.div variants={sidebarVarient} className="w-full flex justify-between px-2">
            {open && <motion.span initial={{ opacity: 0 }} animate={{
              opacity: 1
            }} className='font-bold text-3xl'>Dashboard</motion.span>}

            <button onClick={() => {
              setOpen(!open)
            }
            }
              className='w-8 h-8 flex items-center justify-center text-2xl text-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-full'>
              {open ? "<" : ">"}
            </button>
          </motion.div>
          {open ? <motion.div variants={sidebarVarient} className='inset-0 flex-1 mt-10 h-full w-full'>
            <motion.ul variants={parentVarient} className='flex flex-col gap-2'>
              {
                elements.map(e => (<motion.li variants={childVarients}>{e}</motion.li>))
              }
            </motion.ul>
          </motion.div> : <motion.div variants={sidebarVarient} className='inset-0 flex-1 mt-10 h-full w-full'>
            <motion.ul variants={parentVarient} className='flex flex-col items-center gap-2'>
              {
                elements.map(() => (<motion.li variants={childVarients}><img src='../public/vite.svg' /></motion.li>))
              }
            </motion.ul>
          </motion.div>}
        </motion.div>
      </div >
    </>
  )
}

export default App
