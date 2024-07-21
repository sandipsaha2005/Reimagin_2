import ShineBorder from "./ui";
import React from "react";
export function ShineBorderDemo() {
  return (
    <ShineBorder
      className="relative flex h-[500px] w-32 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A8A9AD", "#B5B7BB", "#CCCCCC"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shine Border
      </span>
    </ShineBorder>
  );
}
