"use client";

import { motion, useInView } from "framer-motion";
import { useRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  text: string;
  type?: "blurInUp";
  by?: "word" | "character";
  className?: string;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
}

export function TextAnimate({
  text,
  type = "blurInUp", // currently only supports blurInUp as per blueprint
  by = "word",
  className,
  delay = 0,
  style,
}: TextAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const words = text.split(" ");
  const characters = text.split("");

  const item = {
    hidden: { 
      filter: "blur(8px)", 
      opacity: 0, 
      y: 20 
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 150,
        mass: 0.8
      },
    },
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  if (by === "character") {
      return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
            className={cn("inline-block", className)}
            style={style}
        >
            {characters.map((char, i) => (
                <motion.span key={i} variants={item} className="inline-block whitespace-pre">
                    {char}
                </motion.span>
            ))}
        </motion.div>
      );
  }

  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        className={cn("inline-block", className)}
        style={style}
    >
        {words.map((word, i) => (
            <motion.span key={i} variants={item} className="inline-block mr-[0.25em] last:mr-0">
                {word}
            </motion.span>
        ))}
    </motion.div>
  );
}
