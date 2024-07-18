import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./index.css"; // Replace with your actual CSS file path

const CirclesAnimation = () => {
  useEffect(() => {
    gsap.to("div.circle", {
      y: -40,
      borderColor: "#f87171",
      ease: "sine.inOut",
      stagger: { each: 0.05, from: "end", repeat: -1, yoyo: true }
    });
  }, []);

  return (
    <main className="bg-black h-screen grid place-items-center text-white">
      <section className="w-96 h-96 relative grid place-items-center">
        {Array.from({ length: 17 }, (_, i) => (
          <div
            key={i}
            className="circle rounded-full absolute border border-neutral-600"
            style={{ width: `${100 - i * 5}%`, height: `${100 - i * 5}%` }}
          ></div>
        ))}
      </section>
    </main>
  );
};

export default CirclesAnimation;
