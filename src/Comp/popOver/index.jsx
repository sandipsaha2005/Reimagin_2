import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import {Card, CardContent} from '@mui/material'
import Slide from '@mui/material/Slide';

const directions = ['left', 'right', 'up', 'down'];

const getRandomDirection = () => {
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
};

const Transition = React.forwardRef(function Transition(props, ref) {
  const direction = getRandomDirection();
  
  return <Slide direction={direction} ref={ref} {...props} />;
});
// import Paquito from './images/Paquito.webp'
import Aldous from './images/Hero641-portrait.webp'
import Balmond from './images/Balmond.webp'
import Chou from './images/Chou.webp'
import Diggie from './images/Diggie.webp'
import Estes from './images/Estes.webp'
import Fanny from './images/Fanny.webp'
import Gusion from './images/Gusion.webp'
import Harley from './images/Harley.webp'
import Irithel from './images/Irithel.webp'
import Johnson from './images/Johnson.webp'
import Kagura from './images/Kagura.png'
import Layla from './images/Layla.webp'
import Miya from './images/Miya.webp'
import Nana from './images/Nana.webp'
import Odette from './images/Odette.webp'
import Pharsa from './images/Pharsa.webp'
import Paquito from './images/Paquito.png'
import Ruby from './images/Ruby.webp'
import Sun from './images/Sun.webp'
import Tigreal from './images/Tigreal.webp'
import Uranus from './images/Uranus.webp'
import Vale from './images/Vale.webp'
import Wanwan from './images/Wanwan.webp'
import XBorg from './images/X.Borg.webp'
import Yve from './images/Yve.webp'
import Zhask from './images/Zhask.webp'
const PopupComponent = ({ onClose, onConfirm, open ,content}) => {
    let img;
    let char;
    let c=content.toLowerCase();
    const [histArr,setHistArr]=useState([]);
    let Herotype={
        f:'Fighter',
        a:'Assassin',
        m:'Marksman',
        g:'Mage',
        t:'Tank',
        s:'Support',
    }

    let arrObj=[
        {
            src:Aldous,
            name:'Aldous',
            type:Herotype.f,
            desc:'The guardian of the Minoan Maze.'
        },
        {
            src:Balmond,
            name:'Balmond',
            type:Herotype.f,
            desc:'The leader of the Orc Legion.'
        },
        {
            src:Chou,
            name:'Chou',
            type:Herotype.f,
            desc:'A talented fighter with a heart of chivalry.'
        },
        {
            src:Diggie,
            name:'Diggie',
            type:Herotype.s,
            desc:'The owl scholar who can control time.'
        },
        {
            src:Estes,
            name:'Estes',
            type:Herotype.s,
            desc:'Elf King who rules the Moon Elves.'
        },
        {
            src:Fanny,
            name:'Fanny',
            type:Herotype.a,
            desc:'A blade dancer in the battlefield.'
        },
        {
            src:Gusion,
            name:'Gusion',
            type:Herotype.a,
            desc:'Rebellious son of House Paxley.'
        },
        {
            src:Harley,
            name:'Harley',
            type:Herotype.a,
            desc:'The young mage whose powers awakened once thrust into danger.'
        },
        {
            src:Irithel,
            name:'Irithel',
            type:Herotype.m,
            desc:'Forest hunter with a Smilodon.'
        },
        {
            src:Johnson,
            name:'Johnson',
            type:Herotype.t,
            desc:'A super cyborg who can transform into a car and lead his teammates into battle.'
        },
        {
            src:Kagura,
            name:'Kagura',
            type:Herotype.g,
            desc:'A genius Onmyouji Master that inherited the ancestral treasure Seimei Umbrella.'
        },
        {
            src:Layla,
            name:'Layla',
            type:Herotype.m,
            desc:'The backbone of the Eruditio Rangers who is also known as the Shining Star.'
        },
        {
            src:Miya,
            name:'Miya',
            type:Herotype.m,
            desc:'The Priestess of the Moon and protector of the Moonlit Forest.'
        },
        {
            src:Nana,
            name:'Nana',
            type:Herotype.g,
            desc:'Little Leonin with no worries.'
        },
        {
            src:Odette,
            name:'Odette',
            type:Herotype.g,
            desc:'Innocent princess that grew up in the Swan Castle and genius mage that excels in sword.'
        },
        {
            src:Pharsa,
            name:'Pharsa',
            type:Herotype.g,
            desc:'Crow Princess of Askati Forest.'
        },
        {
            src:Paquito,
            name:'Paquito',
            type:Herotype.f,
            desc:'The hero who uses his two fists to protect hope and love.'
        },
        {
            src:Ruby,
            name:'Ruby',
            type:Herotype.f,
            desc:'A girl who grew up with Roger help.'
        },
        {
            src:Sun,
            name:'Sun',
            type:Herotype.f,
            desc:'The immortal Monkey King, resolute and unyielding like the mountain that bore him.'
        },
        {
            src:Tigreal,
            name:'Tigreal',
            type:Herotype.t,
            desc:'Leader of the Light Order, guardian of the Moniyan Empire.'
        },
        {
            src:Uranus,
            name:'Uranus',
            type:Herotype.t,
            desc:'Guardian made from lightning and air, guards the Celestial Palace.'
        },
        {
            src:Vale,
            name:'Vale',
            type:Herotype.g,
            desc:'Heir to Wind Fort, wind mage.'
        },
        {
            src:Wanwan,
            name:'Wanwan',
            type:Herotype.m,
            desc:'The Agile Tiger of the Oriental Fighters and a lively young girl.'
        },
        {
            src:XBorg,
            name:'XBorg',
            type:Herotype.f,
            desc:'An uncontrollable flame that determined to take revenge against Eruditio.'
        },
        {
            src:Yve,
            name:'Yve',
            type:Herotype.g,
            desc:'Keeper of the equilibrium of the universe.'
        },
        {
            src:Zhask,
            name:'Zhask',
            type:Herotype.g,
            desc:'King of the Swarm who disrupts the balance of the universe.'
        },
        
    ]


    

    if(c=='a'){
        img=Aldous;
        char="Aldous"
    }else if(c=='b'){
        img=Balmond;
        char='Balmond'
    }else if(c=='c'){
        img=Chou;
        char='Chou'
    }else if(c=='d'){
        img=Diggie;
        char='Diggie'
    }else if(c=='e'){
        img=Estes;
        char='Estes'
    }else if(c=='f'){
        img=Fanny;
        char='Fanny'
    }else if(c=='g'){
        img=Gusion;
        char='Gusion'
    }else if(c=='h'){
        img=Harley;
        char='Harley'
    }else if(c=='i'){
        img=Irithel;
        char='Irithel'
    }else if(c=='j'){
        img=Johnson;
        char='Johnson'
    }else if(c=='k'){
        img=Kagura;
        char='Kagura'
    }else if(c=='l'){
        img=Layla;
        char='Layla'
    }else if(c=='m'){
        img=Miya;
        char='Miya'
    }else if(c=='n'){
        img=Nana;
        char='Nana'
    }else if(c=='o'){
        img=Odette;
        char='Odette'
    }else if(c=='p'){
        img=Pharsa;
        char='Pharsa'
    }
    else if(c=='q'){
        img=Paquito;
        char='Paquito'
    }else if(c=='r'){
        img=Ruby;
        char='Ruby'
    }else if(c=='s'){
        img=Sun;
        char='Sun'
    }else if(c=='t'){
        img=Tigreal;
        char='Tigreal'
    }else if(c=='u'){
        img=Uranus;
        char='Uranus'
    }else if(c=='v'){
        img=Vale;
        char='Vale'
    }else if(c=='w'){
        img=Wanwan;
        char='Wanwan'
    }else if(c=='x'){
        img=XBorg;
        char='XBorg'
    }else if(c=='y'){
        img=Yve;
        char='Yve'
    }else if(c=='z'){
        img=Zhask;
        char='Zhask'
    }
    
    // console.log(typeof(alp.trim()));
    // console.log(alph.length);
    
  return (

    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .MuiDialog-paper": {
          width: "50%", 
          hight: "60%",
          maxHeight: "580px",
          maxWidth: "500px", // Set a maximum width
          borderRadius: "16px", // Rounded corners
          padding: "24px", // Padding around the content
          backgroundColor: "#27272a",
          textTransform: 'uppercase',
          
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "3rem", // Title font size
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "orbitron",
          color: "#FFCC00"
        }}
      >
        {char}
      </DialogTitle>
      {/* <DialogContent
        sx={{
          fontSize: "1rem", // Content font size
          textAlign: "center",
          paddingTop: "16px", // Space between title and content
          color: "#FFFFFF",
        }}
      >
        {content}
      </DialogContent> */}
      <img
        src={img}
        alt="dialog image"
        style={{
          display: "block",
          margin: "16px auto", // Center the image horizontally
          maxWidth: "100%", // Ensure image does not overflow
          borderRadius: "15px", // Rounded corners for the image
          
        }}
      />

    </Dialog>
  );
};

export default PopupComponent;