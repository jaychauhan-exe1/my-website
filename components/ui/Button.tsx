"use client";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "motion/react";
import Link from "next/link";

type ButtonProps = {
  varient: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({ varient, className, children, onClick, href }: ButtonProps) {
  const base =
    `relative px-2 py-2 transition-colors duration-200 overflow-hidden ${className}`;

  const styles = {
    primary:
      "bg-primary/20 text-foreground rounded-full border border-foreground w-fit hover:text-background transition-all duration-200",
    secondary: "bg-transparent px-0! text-foreground w-fit uppercase",
  };

  return (
    <Link href={href || "#"}>
    <motion.div initial="rest" whileHover="hover" className="w-fit my-6">
      <button onClick={onClick} className={`${base} ${styles[varient]}`}>
        {varient === "primary" && (
          <>
            <motion.div
              className="absolute inset-0 rounded-tl-full  bg-foreground -z-1 scale-120"
              variants={{
                rest: { x: "100%", opacity: 0 },
                hover: { x: "0%", opacity: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 260, 
                damping: 30,
              }}
            />
            <motion.span
              className="inline-flex ml-5"
              variants={{
                rest: { x: 2, opacity: 1 },
                hover: { x: -10, opacity: 1 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {children}
            </motion.span>
          </>
        )}
        {varient === "secondary" && <span>{children}</span>}

        {varient === "primary" && (
          <motion.span
            className="inline-flex ml-2 translate-y-0.4"
            variants={{
              rest: { x: 5, opacity: 0 },
              hover: { x: -5, opacity: 1 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <BsArrowRight size={16} />
          </motion.span>
        )}
        {varient === "secondary" && (
          <motion.span
            className="inline-flex ml-2 translate-y-0.4"
            variants={{
              rest: { x: -5, opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <BsArrowRight size={16} />
          </motion.span>
        )}
      </button>
      {varient === "secondary" && (
        <motion.hr
          variants={{
            rest: { width: 0 },
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="border-foreground"
        />
      )}
    </motion.div>
    </Link>
  );
}
