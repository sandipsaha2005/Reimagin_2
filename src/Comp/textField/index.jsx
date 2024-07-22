"use client";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./Ui";
import { Popover, Typography } from "@mui/material";

import Slide from '@mui/material/Slide';
import PopupComponent from '../popOver/index'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function PlaceholdersAndVanishInputDemo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");
  const [open, setOpen] = useState(false);

  const placeholders = [
    "What are the Characters that starts with my name ?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);
    if (lastChar === ' ' || e.target.value === '') {
      return;
    }
    setPopoverContent(value);
    setAnchorEl(e.currentTarget);
    setOpen(true);

    // Close the popover after 100 milliseconds
    setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsPopupOpen(true);
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
      <PopupComponent onClose={handleClose} open={open} content={popoverContent.slice(-1)}/>
      

    </div>
  );
}
