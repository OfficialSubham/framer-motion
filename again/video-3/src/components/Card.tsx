import {
  Ambulance,
  Annoyed,
  Clock,
  Dribbble,
  Hourglass,
  MessageSquare,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Card = () => {
  const [open, setOpen] = useState(true);

  const lists = [
    {
      icon: <MessageSquare height={13} width={13} />,
      name: "Aceternity UI components",
      desc: "A collection of UI components",
    },
    {
      icon: <Hourglass height={13} width={13} />,
      name: "This is also related to time",
      desc: "Hour glass is a very amazing tool",
    },
    {
      icon: <Clock height={13} width={13} />,
      name: "This is a reminder of time",
      desc: "Time is ticking so please use it wisely",
    },
    {
      icon: <Ambulance height={13} width={13} />,
      name: "Fastest delivery available",
      desc: "Please side there is  a patient in our vehicle",
    },
    {
      icon: <Annoyed height={13} width={13} />,
      name: "This is a very annoying box",
      desc: "You can find this very easily on our websit",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="w-72 min-h-[26rem] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(24,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col rounded-xl
    "
          >
            <h2 className="font-bold text-[8px]">Aceternity UI components</h2>
            <p className="text-[8px] text-neutral-500">
              A collection of beautiful UI components, let's get on with it
            </p>
            <div className="flex items-center justify-center flex-col">
              <button
                className="flex text-[10px] items-center mt-4 justify-center gap-1 font-bold shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(24,42,53,0.09),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-md"
                onClick={() => setOpen(false)}
              >
                <Dribbble height={14} width={14} />
                Aceternity
                <X height={14} width={14} />
              </button>
            </div>
            <div className="bg-neutral-200 rounded-2xl border-dashed border border-neutral-300 flex-1 mt-4 relative">
              {/* motion divs start here */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.01,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white rounded-2xl divide-y divide-neutral-400"
              >
                {lists.map((l) => {
                  return (
                    <div className="p-4 flex items-start gap-2">
                      <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(24,42,53,0.09),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1.5 rounded-md">
                        {l.icon}
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-[8px] font-bold text-neutral-600">
                          {l.name}
                        </h2>
                        <h4 className="text-neutral-400 text-[8px] mt-1">
                          {l.desc}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
              {/* motion divs end here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
