import {
  Album,
  BadgeInfo,
  BadgePercent,
  Candy,
  Cannabis,
  ChartLine,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import { motion } from "motion/react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    {
      icon: <ChartLine />,
      name: "Analytics",
      href: "#",
    },
    {
      icon: <Album />,
      name: "Album",
      href: "#",
    },
    {
      icon: <BadgeInfo />,
      name: "Information",
      href: "#",
    },
    {
      icon: <BadgePercent />,
      name: "Analytics",
      href: "#",
    },
    {
      icon: <Cannabis />,
      name: "Cannabis",
      href: "#",
    },
    {
      icon: <Candy />,
      name: "Candy",
      href: "#",
    },
  ];

  const sidebarVarient = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const childVarients = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  const parentVarients = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delay: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            delay: -1
        }
    }
  }

  return (
    <motion.div
      className="h-full border-r border-neutral-400"
      //   style={{
      //     width: menuOpen ? "360px" : "70px",
      //   }}
      initial={false}
      animate={menuOpen ? "open" : "closed"}
    >
      <motion.nav
        variants={sidebarVarient}
        transition={{
          duration: 0.3,
        }}
        className="bg-white shadow-md h-full"
      >
        <div className="p-4 flex items-center justify-between ">
          <h2 className={`font-semibold text-xl ${!menuOpen && "sr-only"} `}>
            Dashboard
          </h2>
          <button
            className=" shadow-md p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMenuOpen((st) => !st)}
          >
            {menuOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <div className="relative">
          <nav className="p-4">
            <motion.ul variants={parentVarients} className="space-y-2">
              {links.map((link) => {
                return (
                  <motion.li variants={childVarients} key={link.name}>
                    <a
                      href={link.href}
                      className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 gap-4 rounded-2xl`}
                      title={!menuOpen ? link.name : ""}
                    >
                      {link.icon}
                      {menuOpen && link.name}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Menu;
