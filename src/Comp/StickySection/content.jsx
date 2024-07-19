import React from 'react';
// import images from '../assets/img/'
import './App.css'
const contentData = [
  {
    bgClass: 'bg-1',
    imgSrc: '../assets/img/1.png',
    title: 'Hero Ranking',
    text: "Mobile Legends Bang Bang's hero rankings are the heartbeat of its dynamic meta, fueling debates and shaping legends.",
  },
  {
    bgClass: 'bg-2',
    imgSrc: '../assets/img/2.png',
    title: 'The Dogma',
    text: 'The digital gospel etched into the very code of the algorithmic society, served as the bedrock of the cognitive regime.',
  },
  {
    bgClass: 'bg-3',
    imgSrc: '../assets/img/3.png',
    title: 'The Architects',
    text: 'The elusive entities, lacking human form, operate in the shadows, skillfully shaping societal norms through the complex interplay of algorithms and Dogmas.',
  },
  {
    bgClass: 'bg-4',
    imgSrc: '../assets/img/4.png',
    title: 'The Wasteland',
    text: 'This overlooked realm, a consequence of algorithmic judgments, is a haunting landscape filled with the echoes of untold stories and uncharted thoughts.',
  },
  
];

const Content = () => (
  <>
    <div className="content content--highlight content--intro text-yellow-500">
      <p className="text-large">As data conglomerates reveled in the opulence of cognitive wealth, a silent underclass manifested, condemned to the digital periphery.</p>

    </div>
    {contentData.map((item, index) => (
      <div key={index} className={`content content--sticky content--grid  blur-1 ${item.bgClass}`}>
        <img className="content_img content_img--large content_img--left" src={item.imgSrc} alt={item.title} />
        <h2 className="content_title">{item.title}</h2>
        <p className="content_text content_text--left text-meta">{item.text}</p>
      </div>
    ))}
    <div className="content content--highlight content--outro">
      <p className="text-large">Lost in perpetual dependency, inhabitants of the Synthetic Era found solace in cryptic simulations, where pain ebbed and cognitive loads momentarily lightened.</p>
      {/* <img className="content__img spacer" src="img/4.png" alt="Outro" /> */}
    </div>
  </>
);

export default Content;
