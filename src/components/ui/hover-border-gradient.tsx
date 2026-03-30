import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 2,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  return (
    <Tag
      className={cn(
        "relative rounded-full border border-gray-100/20 bg-white hover:bg-white/90 shadow-sm hover:shadow-md transition duration-500 overflow-hidden inline-flex items-center justify-center p-[2px]",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full relative z-10 rounded-[inherit] px-6 py-3 bg-white flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "absolute inset-0 z-0 h-full w-full bg-[conic-gradient(#3b82f6_0deg,transparent_60deg)]"
        )}
        animate={{
          rotate: clockwise ? 360 : -360,
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </Tag>
  );
}
