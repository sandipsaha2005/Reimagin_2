import React, { useEffect, useId, useRef, useState } from "react";
// import img from "next/image";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../Hooks/use-outside-click";
import img1 from "../Scroll3Dgrid/img/1.jpg";
import img2 from "../Scroll3Dgrid/img/2.jpg";
import img3 from "../Scroll3Dgrid/img/3.jpg";
import img4 from "../Scroll3Dgrid/img/4.jpg";
import img5 from "../Scroll3Dgrid/img/5.jpg";
import img6 from "../Scroll3Dgrid/img/6.jpg";
import img7 from "../Scroll3Dgrid/img/7.jpg";
import img8 from "../Scroll3Dgrid/img/8.jpg";
import img9 from "../Scroll3Dgrid/img/9.jpg";
import { easePoly } from "d3-ease";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const [smallIconActive, setSmallIconActive] = useState(false);
  const ref = useRef(null);
  const id = useId();
  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 }},
  };
  const titleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const descriptionVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0.8, transition: { duration: 0.3 } },
  };
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  // console.log(smallIconActive);
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
        {/* <img src={img1} alt="" /> */}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full  h-full items-center flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden justify-between"
            >
              <motion.div
                className="flex justify-center gap-20 items-center py-5"
                // layoutId={`image-${active.title}-${id}`}
              >
               
                <img
                  priority
                  width={200}
                  height={200}
                  src={img1}
                  // alt={active.title}
                  className="sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
                <img
                  priority
                  width={200}
                  height={200}
                  src={img2}
                  // alt={active.title}
                  className=" lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
                <img
                  priority
                  width={200}
                  height={200}
                  src={img3}
                  // alt={active.title}
                  className=" lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
                <img
                  priority
                  width={200}
                  height={200}
                  src={img4}
                  // alt={active.title}
                  className=" lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              
              <motion.div
                className="flex justify-center gap-x-20 items-center"
                // layoutId={`image-${active.title}-${id}`}
              >
                <img
                  priority
                  width={200}
                  height={200}
                  src={img1}
                  // alt={active.title}
                  className=" lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
                <img
                  priority
                  width={200}
                  height={200}
                  src={img2}
                  // alt={active.title}
                  className=" lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
                <img
                  priority
                  width={200}
                  height={200}
                  src={img3}
                  // alt={active.title}
                  className=" lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
                <img
                  priority
                  width={200}
                  height={200}
                  src={img4}
                  // alt={active.title}
                  className=" lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              {/* <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div> */}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            onHoverStart={() => setSmallIconActive(true)}
            onHoverEnd={() => setSmallIconActive(false)}
            className="p-8 flex md:flex-row justify-between gap-12 items-center  rounded-xl cursor-pointer ease-in-out	duration-300"
          >
            <div className="flex gap-4 justify-center md:flex-row ">
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  // onHoverEnd={() => console.log("Mouse left")}
                  // Define your variants
                  variants={titleVariants}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverEnd={() => console.log("Mouse left")}
                  // Define your variants
                  variants={{
                    // initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                    tap: { scale: 0.95 },
                  }}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {/* <motion.button */}
            {/* // layoutId={`button-${card.title}-${id}`}
              // className="p-2"
            > */}
            {smallIconActive && (
              <motion.div
                className="h-4 flex gap-8"
                initial="hidden"
                animate="visible"
                exit='exit'
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                  exit:{
                    opacity: 0,
                    transition: { staggerChildren: 0.2 },
                  }
                }}
              >
                <motion.img
                  src={img1}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                  
                />
                <motion.img
                  src={img1}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                />
                <motion.img
                  src={img1}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                />
                <motion.img
                  src={img1}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                />
              </motion.div>
            )}
            {/* </motion.button> */}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    title: "MOBILE lEGEND",
    src: { img1 },
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
        </p>
      );
    },
  },
  // {
  //   description: "Babbu Maan",
  //   title: "Mitran Di Chhatri",
  //   src: {img2},
  //   ctaText: "Play",
  //   ctaLink: "https://ui.aceternity.com/templates",
  //   content: () => {
  //     return (
  //       <p>
  //         Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
  //         voice and profound lyrics that resonate deeply with his audience. Born
  //         in the village of Khant Maanpur in Punjab, India, he has become a
  //         cultural icon in the Punjabi music industry. <br /> <br /> His songs
  //         often reflect the struggles and triumphs of everyday life, capturing
  //         the essence of Punjabi culture and traditions. With a career spanning
  //         over two decades, Babbu Maan has released numerous hit albums and
  //         singles that have garnered him a massive fan following both in India
  //         and abroad.
  //       </p>
  //     );
  //   },
  // },
  // {
  //   description: "Metallica",
  //   title: "For Whom The Bell Tolls",
  //   src: {img3},
  //   ctaText: "Play",
  //   ctaLink: "https://ui.aceternity.com/templates",
  //   content: () => {
  //     return (
  //       <p>
  //         Metallica, an iconic American heavy metal band, is renowned for their
  //         powerful sound and intense performances that resonate deeply with
  //         their audience. Formed in Los Angeles, California, they have become a
  //         cultural icon in the heavy metal music industry. <br /> <br /> Their
  //         songs often reflect themes of aggression, social issues, and personal
  //         struggles, capturing the essence of the heavy metal genre. With a
  //         career spanning over four decades, Metallica has released numerous hit
  //         albums and singles that have garnered them a massive fan following
  //         both in the United States and abroad.
  //       </p>
  //     );
  //   },
  // },
  // {
  //   description: "Led Zeppelin",
  //   title: "Stairway To Heaven",
  //   src: {img4},
  //   ctaText: "Play",
  //   ctaLink: "https://ui.aceternity.com/templates",
  //   content: () => {
  //     return (
  //       <p>
  //         Led Zeppelin, a legendary British rock band, is renowned for their
  //         innovative sound and profound impact on the music industry. Formed in
  //         London in 1968, they have become a cultural icon in the rock music
  //         world. <br /> <br /> Their songs often reflect a blend of blues, hard
  //         rock, and folk music, capturing the essence of the 1970s rock era.
  //         With a career spanning over a decade, Led Zeppelin has released
  //         numerous hit albums and singles that have garnered them a massive fan
  //         following both in the United Kingdom and abroad.
  //       </p>
  //     );
  //   },
  // },
  // {
  //   description: "Mustafa Zahid",
  //   title: "Toh Phir Aao",
  //   src: {img5},
  //   ctaText: "Play",
  //   ctaLink: "https://ui.aceternity.com/templates",
  //   content: () => {
  //     return (
  //       <p>
  //         "Aawarapan", a Bollywood movie starring Emraan Hashmi, is renowned for
  //         its intense storyline and powerful performances. Directed by Mohit
  //         Suri, the film has become a significant work in the Indian film
  //         industry. <br /> <br /> The movie explores themes of love, redemption,
  //         and sacrifice, capturing the essence of human emotions and
  //         relationships. With a gripping narrative and memorable music,
  //         "Aawarapan" has garnered a massive fan following both in India and
  //         abroad, solidifying Emraan Hashmi's status as a versatile actor.
  //       </p>
  //     );
  //   },
  // },
];
