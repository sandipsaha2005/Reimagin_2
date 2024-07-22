import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import {Card, CardContent} from '@mui/material'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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

    let arrObj=[
        {
            src:Aldous,
            name:'Aldous',
            type:'Fighter',
            desc:'Something'
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
    }else if(c=='r'){
        img=Ruby;
        char='Ruby'
    }else if(c=='s'){
        img=Sun;
        char='Sun'
    }else if(c=='r'){
        img=Ruby;
        char='Ruby'
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
    

  return (

    <Dialog open={open}  onClose={onClose} 
        
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          backgroundColor:'rgba(255,255,255,0)'
        }}>
      <DialogTitle >{char}</DialogTitle>
      <DialogContent sx={{fontSize:'25px',align:'center'}}>
        {content}
      </DialogContent>
      <img src={img} alt="" />
      {/* <DialogActions sx={{width:'100',display:'flex',justifyContent:'space-evenly'}}>
        <Button onClick={onClose}  variant='contained' color="primary" sx={{width:'45%'}}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variant='contained' color="error" sx={{width:'45%'}}>
          Delete
        </Button>
      </DialogActions> */}
    </Dialog>


  );
};

export default PopupComponent;
