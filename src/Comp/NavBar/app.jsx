// src/App.jsx
import React from 'react';
import Menu from './menu';
import './base.css';
import CloseIcon from '@mui/icons-material/Close';
import AnimatedSubscribeButton from '../../Comp/downloadButton/ui'
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
const Nav = () => (
  <main>
    
    <div className="menu-wrap">

      <Menu />
      
      {/* <AnimatedSubscribeButton
              buttonColor="black"
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
            /> */}
    </div>
  </main>
);

export default Nav;
