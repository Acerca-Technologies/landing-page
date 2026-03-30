import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
      y: 0,
      transition: {
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      filter: filter ? "blur(8px)" : "none",
      y: 5,
    },
  };

  return (
    <div className={cn("font-bold text-gray-900", className)}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-4 leading-snug tracking-wide"
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              variants={child}
              key={word + idx}
              className="inline-block will-change-[transform,opacity,filter]"
              style={{ marginRight: "0.25em", transform: "translateZ(0)" }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};
