import React from "react";
import { cn } from "../../utils/cn";

const AnimatedShinyText = ({ children, className, shimmerWidth = 200 }) => {
  return (
    <p
      style={{
        "--shimmer-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "mx-auto max-w-md text-neutral-200/70 ",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Enhanced shimmer gradient
        "bg-gradient-to-r from-transparent via-white/100 via-50%",

        className
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;
