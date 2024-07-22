"use client";
import React, { useState, useRef } from "react";
import { PlaceholdersAndVanishInput } from "./Ui";
import { Popover, Typography } from "@mui/material";
import Slide from '@mui/material/Slide';
import PopupComponent from '../popOver/index';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function PlaceholdersAndVanishInputDemo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");
  const [open, setOpen] = useState(false);
  const [prevValue, setPrevValue] = useState("");

  const placeholders = [
    "Who is the most powerful hero in Mobile Legends?",
    "Effective strategies for late-game team fights.",
    "How to counter Aldous in Mobile Legends?",
    "Top tank heroes for defensive plays.",
    "Which hero has the highest win rate?",
    "Optimal build for high-damage heroes.",
    "What is the best build for Gusion?",
    "Latest patch notes and hero adjustments.",
  ];
  
  const handleChange = (e) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);

    // Check if the current input value is shorter than the previous value (indicating a deletion)
    if (value.length < prevValue.length) {
      setOpen(false);
      setPrevValue(value);
      return;
    }

    if (lastChar === ' ' || value === '') {
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
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsPopupOpen(true);
    console.log("submitted");
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Just Enter Your Name
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <PopupComponent onClose={handleClose} open={open} content={popoverContent.slice(-1)} />
    </div>
  );
}