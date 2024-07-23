"use client";
import React, { useState, useRef } from "react";
import { PlaceholdersAndVanishInput } from "./Ui";
import { Popover, Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import PopupComponent from "../popOver/index";

import Aldous from "./images/Hero641-portrait.webp";
import Balmond from "./images/Balmond.webp";
import Chou from "./images/Chou.webp";
import Diggie from "./images/Diggie.webp";
import Estes from "./images/Estes.webp";
import Fanny from "./images/Fanny.webp";
import Gusion from "./images/Gusion.webp";
import Harley from "./images/Harley.webp";
import Irithel from "./images/Irithel.webp";
import Johnson from "./images/Johnson.webp";
import Kagura from "./images/Kagura.png";
import Layla from "./images/Layla.webp";
import Miya from "./images/Miya.webp";
import Nana from "./images/Nana.webp";
import Odette from "./images/Odette.webp";
import Pharsa from "./images/Pharsa.webp";
import Paquito from "./images/Paquito.png";
import Ruby from "./images/Ruby.webp";
import Sun from "./images/Sun.webp";
import Tigreal from "./images/Tigreal.webp";
import Uranus from "./images/Uranus.webp";
import Vale from "./images/Vale.webp";
import Wanwan from "./images/Wanwan.webp";
import XBorg from "./images/XBorg.webp";
import Yve from "./images/Yve.webp";
import Zhask from "./images/Zhask.webp";
import { ThreeDCardDemo } from "../threeDCard/index2";

//src={item.image}
//title={item.title}
//desc={item.description}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function PlaceholdersAndVanishInputDemo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");
  const [open, setOpen] = useState(false);
  const [prevValue, setPrevValue] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState(null);
  const placeholders = [
    "How to counter Aldous in Mobile Legends? 🔄",
    "Top tank heroes for defensive plays. 🛡️",
    "Which hero has the highest win rate? 🏆",
    "Optimal build for high-damage heroes. 💥",
    "What is the best build for Gusion? 🗡️",
    "Latest patch notes and hero adjustments. 📝",
  ];

  let Herotype = {
    f: "Fighter",
    a: "Assassin",
    m: "Marksman",
    g: "Mage",
    t: "Tank",
    s: "Support",
  };

  let obj1 = {
    a: Aldous,
    b: Balmond,
    c: Chou,
    d: Diggie,
    e: Estes,
    f: Fanny,
    g: Gusion,
    h: Harley,
    i: Irithel,
    j: Johnson,
    k: Kagura,
    l: Layla,
    m: Miya,
    n: Nana,
    o: Odette,
    p: Pharsa,
    q: Paquito,
    r: Ruby,
    s: Sun,
    t: Tigreal,
    u: Uranus,
    v: Vale,
    w: Wanwan,
    x: XBorg,
    y: Yve,
    z: Zhask,
  };

  let getname = {
    a: "Aldous",
    b: "Balmond",
    c: "Chou",
    d: "Diggie",
    e: "Estes",
    f: "Fanny",
    g: "Gusion",
    h: "Harley",
    i: "Irithel",
    j: "Johnson",
    k: "Kagura",
    l: "Layla",
    m: "Miya",
    n: "Nana",
    o: "Odette",
    p: "Pharsa",
    q: "Paquito",
    r: "Ruby",
    s: "Sun",
    t: "Tigreal",
    u: "Uranus",
    v: "Vale",
    w: "Wanwan",
    x: "XBorg",
    y: "Yve",
    z: "Zhask",
  };

  let heroObjects = {};

  let arrObj = [
    {
      src: Aldous,
      name: "Aldous",
      type: Herotype.f,
      desc: "The guardian of the Minoan Maze.",
    },
    {
      src: Balmond,
      name: "Balmond",
      type: Herotype.f,
      desc: "The leader of the Orc Legion.",
    },
    {
      src: Chou,
      name: "Chou",
      type: Herotype.f,
      desc: "A talented fighter with a heart of chivalry.",
    },
    {
      src: Diggie,
      name: "Diggie",
      type: Herotype.s,
      desc: "The owl scholar who can control time.",
    },
    {
      src: Estes,
      name: "Estes",
      type: Herotype.s,
      desc: "Elf King who rules the Moon Elves.",
    },
    {
      src: Fanny,
      name: "Fanny",
      type: Herotype.a,
      desc: "A blade dancer in the battlefield.",
    },
    {
      src: Gusion,
      name: "Gusion",
      type: Herotype.a,
      desc: "Rebellious son of House Paxley.",
    },
    {
      src: Harley,
      name: "Harley",
      type: Herotype.a,
      desc: "The young mage whose powers awakened once thrust into danger.",
    },
    {
      src: Irithel,
      name: "Irithel",
      type: Herotype.m,
      desc: "Forest hunter with a Smilodon.",
    },
    {
      src: Johnson,
      name: "Johnson",
      type: Herotype.t,
      desc: "A super cyborg who can transform into a car and lead his teammates into battle.",
    },
    {
      src: Kagura,
      name: "Kagura",
      type: Herotype.g,
      desc: "A genius Onmyouji Master that inherited the ancestral treasure Seimei Umbrella.",
    },
    {
      src: Layla,
      name: "Layla",
      type: Herotype.m,
      desc: "The backbone of the Eruditio Rangers who is also known as the Shining Star.",
    },
    {
      src: Miya,
      name: "Miya",
      type: Herotype.m,
      desc: "The Priestess of the Moon and protector of the Moonlit Forest.",
    },
    {
      src: Nana,
      name: "Nana",
      type: Herotype.g,
      desc: "Little Leonin with no worries.",
    },
    {
      src: Odette,
      name: "Odette",
      type: Herotype.g,
      desc: "Innocent princess that grew up in the Swan Castle and genius mage that excels in sword.",
    },
    {
      src: Pharsa,
      name: "Pharsa",
      type: Herotype.g,
      desc: "Crow Princess of Askati Forest.",
    },
    {
      src: Paquito,
      name: "Paquito",
      type: Herotype.f,
      desc: "The hero who uses his two fists to protect hope and love.",
    },
    {
      src: Ruby,
      name: "Ruby",
      type: Herotype.f,
      desc: "A girl who grew up with Roger help.",
    },
    {
      src: Sun,
      name: "Sun",
      type: Herotype.f,
      desc: "The immortal Monkey King, resolute and unyielding like the mountain that bore him.",
    },
    {
      src: Tigreal,
      name: "Tigreal",
      type: Herotype.t,
      desc: "Leader of the Light Order, guardian of the Moniyan Empire.",
    },
    {
      src: Uranus,
      name: "Uranus",
      type: Herotype.t,
      desc: "Guardian made from lightning and air, guards the Celestial Palace.",
    },
    {
      src: Vale,
      name: "Vale",
      type: Herotype.g,
      desc: "Heir to Wind Fort, wind mage.",
    },
    {
      src: Wanwan,
      name: "Wanwan",
      type: Herotype.m,
      desc: "The Agile Tiger of the Oriental Fighters and a lively young girl.",
    },
    {
      src: XBorg,
      name: "XBorg",
      type: Herotype.f,
      desc: "An uncontrollable flame that determined to take revenge against Eruditio.",
    },
    {
      src: Yve,
      name: "Yve",
      type: Herotype.g,
      desc: "Keeper of the equilibrium of the universe.",
    },
    {
      src: Zhask,
      name: "Zhask",
      type: Herotype.g,
      desc: "King of the Swarm who disrupts the balance of the universe.",
    },
  ];

  arrObj.forEach((hero) => {
    heroObjects[hero.name] = {
      name: hero.name,
      type: hero.type,
      desc: hero.desc,
    };
  });

  // console.log(heroObjects.Aldous);

  function getMatchingCharacter(image) {
    let result = [];

    for (let letter of image) {
      if (obj1.hasOwnProperty(letter)) {
        result.push(obj1[letter]);
      }
    }

    return result;
  }

  // let image = ['a', 'c', 'e', 'g', 'z'];
  // let matchingCharacters = getMatchingCharacter(image);
  const handleChange = (e) => {
    const inputValue = event.target.value;
    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setImage(null);
      const value = e.target.value;
      const lastChar = value.slice(-1);
      setState(value.split(""));
      // Check if the current input value is shorter than the previous value (indicating a deletion)
      if (value.length < prevValue.length) {
        setOpen(false);
        setPrevValue(value);
        return;
      }

      if (lastChar === " " || value === "") {
        return;
      }
      setPopoverContent(value);
      setAnchorEl(e.currentTarget);
      setOpen(true);
      setPrevValue(value);

      // Close the popover after 100 milliseconds
      setTimeout(() => {
        setOpen(false);
      }, 600);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let letters = state;
    setState("");
    let matchingCharacters = getMatchingCharacter(letters);

    setImage(matchingCharacters[0]);

    // console.log("submitted");
  };
  // console.log(image);
  const id = open ? "simple-popover" : undefined;
  const getName = (name) => {
    return getname[name];
    // return name.split('/').at(-1).split('.').at(0); // this.png
  };
  return (
    <div className="h-[40rem] flex flex-col justify-evenly items-center px-4">
      <div className="flex gap-3 flex-wrap">
        {state &&
          state.map(
            (elem, index) =>
              elem != " " && (
                <div className="flex flex-col justify-center items-center">
                <img
                  key={index}
                  src={obj1[elem.toLowerCase()]}
                  alt={elem}
                  height="150px"
                  width="100px"
                  style={{ borderRadius: "10px" }}
                />
                <p className="text-zinc-500">{getName(elem)}</p>

</div>
              )
          )}
        {image && (
          <div className="flex justify-center gap-4">
            <img
              src={image}
              alt="Image"
              height="250px"
              width="200px"
              style={{ borderRadius: "20px" }}
            />
            {/* <p>{heroObjects.image.name}</p> */}
            <div className="w-32">
              <p>
                <span className="text-[#FFCC00] font-[Steelar]">Name</span>
                <br />
                {arrObj.find((elem) => elem.src == image).name}
              </p>
              <br />
              <hr />
              <p>
                <span className="text-[#FFCC00] font-[Steelar]">Type</span>
                <br />
                {arrObj.find((elem) => elem.src == image).type}
              </p>
              <br />
              <hr />
              <p className="wrap">
                <span className="text-[#FFCC00] font-[Steelar]">
                  Description
                </span>
                <br />
                {arrObj.find((elem) => elem.src == image).desc}
              </p>
            </div>
          </div>
        )}
      </div>
      <h2 className="text-xl text-center sm:text-4xl dark:text-white text-black">
        ✨ Enter Your Name and Press Enter to Witness the Magic! 
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <PopupComponent
        onClose={handleClose}
        open={open}
        content={popoverContent.slice(-1)}
      />
    </div>
  );
}
