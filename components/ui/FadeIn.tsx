"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
}: FadeInProps) {

  const directions = {
    up: {
      x: 0,
      y: 40,
    },

    down: {
      x: 0,
      y: -40,
    },

    left: {
      x: 40,
      y: 0,
    },

    right: {
      x: -40,
      y: 0,
    },
  };


  return (
    <motion.div

      initial={{
        opacity: 0,
        ...directions[direction],
      }}

      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}

    >
      {children}
    </motion.div>
  );
}