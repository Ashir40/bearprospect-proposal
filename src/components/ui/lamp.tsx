"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0f1e] w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "min(30rem, 80vw)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto right-1/2 h-40 md:h-56 overflow-visible w-[min(30rem,80vw)] bg-gradient-conic from-teal-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[#0a0f1e] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-[#0a0f1e] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "min(30rem, 80vw)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto left-1/2 h-40 md:h-56 w-[min(30rem,80vw)] bg-gradient-conic from-transparent via-transparent to-teal-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#0a0f1e] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-[#0a0f1e] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0a0f1e] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-24 md:h-36 w-[min(28rem,75vw)] -translate-y-1/2 rounded-full bg-teal-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "min(16rem, 50vw)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-24 md:h-36 w-64 -translate-y-[4rem] md:-translate-y-[6rem] rounded-full bg-teal-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "min(30rem, 80vw)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[min(30rem,80vw)] -translate-y-[5rem] md:-translate-y-[7rem] bg-teal-400"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[10rem] md:-translate-y-[12.5rem] bg-[#0a0f1e]"></div>
      </div>

      <div className="relative z-50 flex -translate-y-20 sm:-translate-y-32 md:-translate-y-56 flex-col items-center px-4 md:px-5">
        {children}
      </div>
    </div>
  );
};
