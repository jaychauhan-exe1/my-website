"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const DURATION = 0.2;
  const STAGGER = 0.025;
  const menuItems = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between py-4 text-xl border-b border-foreground">
      <div className="bg-">
        <h3 className="logo site-name font-normal">Jay®</h3>
      </div>
      <div className="flex">
        <button onClick={() => document.body.classList.toggle("dark")}>
          change mode
        </button>
        <button onClick={() => setIsMenuOpen(true)}>
          <h3 className="menu-nav font-normal">Menu</h3>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-foreground text-background"
          >
            <ul className="w-full title-font lg:text-8xl md:text-6xl text-4xl text-center flex flex-col gap-8 uppercase">
              {menuItems.map((item) => (
                <Link href={item.href}>
                  <div className="cursor-pointer p-4 hover:bg-darkforeground hover:text-foreground dark:hover:bg-background dark:hover:text-foreground transition-colors duration-200">
                    <motion.li
                      className="relative overflow-hidden"
                      initial="rest"
                      whileHover="hover"
                      variants={{ rest: {}, hover: {} }}
                      onClick={()=> setIsMenuOpen(false)}
                    >
                      <div>
                        {item.name.split("").map((l, i) => (
                          <motion.span
                            className="inline-block"
                            variants={{
                              rest: { y: 0 },
                              hover: { y: "-100%" },
                            }}
                            transition={{
                              duration: DURATION,
                              ease: "easeInOut",
                              delay: STAGGER * i,
                            }}
                          >
                            {l}
                          </motion.span>
                        ))}
                      </div>
                      <div className="absolute inset-0">
                        {item.name.split("").map((l, i) => (
                          <motion.span
                            variants={{
                              rest: {
                                y: "100%",
                              },
                              hover: {
                                y: 0,
                              },
                            }}
                            transition={{
                              duration: DURATION,
                              ease: "easeInOut",
                              delay: STAGGER * i,
                            }}
                            className="inline-block"
                            key={i}
                          >
                            {l}
                          </motion.span>
                        ))}
                      </div>
                    </motion.li>
                  </div>
                </Link>
              ))}
              <div
                className="cursor-pointer p-4 hover:bg-danger transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.li
                  className="relative overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                  variants={{ rest: {}, hover: {} }}
                >
                  <div>
      {"Close".split("").map((l, i) => (
        <motion.span
          key={`close-top-${i}`}
          className="inline-block"
          variants={{
            rest: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
        >
          {l}
        </motion.span>
      ))}
    </div>

    {/* BOTTOM TEXT */}
    <div className="absolute inset-0">
      {"Close".split("").map((l, i) => (
        <motion.span
          key={`close-bottom-${i}`}
          className="inline-block"
          variants={{
            rest: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
        >
          {l}
        </motion.span>
      ))}
    </div>
                </motion.li>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
