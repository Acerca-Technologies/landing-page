import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<
    {
      id: number;
      left: string;
      delay: string;
      duration: string;
    }[]
  >([]);

  useEffect(() => {
    const meteors = new Array(number || 20).fill(true).map((_, idx) => ({
      id: idx,
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      delay: Math.random() * (1 - 0.2) + 0.2 + "s",
      duration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteors(meteors);
  }, [number]);

  return (
    <>
      {meteors.map((m) => (
        <span
          key={m.id}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] will-change-transform",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
            transform: "translateZ(0)",
          }}
        ></span>
      ))}
    </>
  );
};
