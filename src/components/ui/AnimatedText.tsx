import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";
import React from "react";

interface AnimatedTextProps extends HTMLMotionProps<"div"> {
  text: string;
  el?: React.ElementType;
  className?: string;
  once?: boolean;
}

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9] as any,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p" as any,
  className,
  once = true,
  ...props
}: AnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = React.useRef(null);

  return (
    <motion.div
      className={cn(className)}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
        hidden: {},
      }}
      {...props}
    >
      {textArray.map((line, lineIndex) => (
        <span className="block" key={`${line}-${lineIndex}`}>
          {line.split(" ").map((word: string, wordIndex: number) => (
            <span className="inline-block" key={`${word}-${wordIndex}`}>
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
              >
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};
