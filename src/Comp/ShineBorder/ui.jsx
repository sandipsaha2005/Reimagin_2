"use client";

import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

/**
 * @typedef {Object} ShineBorderProps
 * @property {number} [borderRadius=8] - Defines the radius of the border.
 * @property {number} [borderWidth=1] - Defines the width of the border.
 * @property {number} [duration=14] - Defines the animation duration for the shining border.
 * @property {string|string[]} [color="#000000"] - Defines the border color.
 * @property {string} [className] - Additional class name to apply to the component.
 * @property {React.ReactNode} children - The content inside the ShineBorder component.
 */

/**
 * ShineBorder Component
 * @param {ShineBorderProps} props - The props for the component.
 * @returns {JSX.Element}
 */
export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1.2,
  duration = 10,
  color = "#000000",
  className,
  children,
}) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
      }}
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] p-3",
        className
      )}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
            Array.isArray(color) ? color.join(",") : color
          },transparent,transparent)`,
        }}
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
}

ShineBorder.propTypes = {
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  duration: PropTypes.number,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
