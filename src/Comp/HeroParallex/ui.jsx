"use client";
import React from "react";
import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Image } from "lucide-react";
import AnimatedSubscribeButton from '../downloadButton/ui'
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {

  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-30 px-4 w-full left-0 top-0 ">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
     <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFCC00] to-neutral-300"> Mobile Legends</span><br /> Where Legends are Born!
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      Unleash your potential in 5v5 battles, master legendary heroes, and lead your team to glorious victory. Your legend starts here!
      </p>
      <div className="flex gap-4 mt-5">
      {show1 !== true && (
              <div onClick={()=>setShow((prev)=>!prev)} className="border-2 border-[#C3A26C] rounded-md z-[1000]">
            <AnimatedSubscribeButton
              buttonColor="#000000"
              buttonTextColor="#ffffff"
              subscribeStatus={false}
              initialText={
                <span className="group inline-flex items-center">
                  <FaApple className="mr-2 text-xl transition-transform duration-300 ease-in-out group-hover:scale-150" />
                  Download{" "}
                  <ChevronRightIcon className="ml-1 h-5 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Complete{" "}
                </span>
              }
            />
            </div>
            )}
            
            {show !== true && (
              <div onClick={()=>setShow1((prev)=>!prev)}  className="border-2 border-[#C3A26C] rounded-md z-[1000]">
            <AnimatedSubscribeButton
              buttonColor="#000000"
              buttonTextColor="#ffffff"
              subscribeStatus={false}
              initialText={
                <span className="group inline-flex items-center">
                  <DiAndroid className="mr-2 text-xl transition-transform duration-300 ease-in-out group-hover:scale-150" />
                  Download{" "}
                  <ChevronRightIcon className="ml-1 h-5 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Complete{" "}
                </span>
              }
            />
            </div>
            )}
            </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {/* <a href={product.link} className="block group-hover/product:shadow-2xl"> */}
        <img
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      {/* </a> */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};