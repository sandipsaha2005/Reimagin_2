import React from 'react';
// import images from '../assets/img/'
import './App.css'
const contentData = [
  {
    bgClass: 'bg-1',
    imgSrc: '../assets/img/1.png',
    title: 'The Algorithm',
    text: 'The algorithm\'s workings are shrouded in complexity, and its decision-making processes are inscrutable to the general populace.',
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
  {
    bgClass: 'bg-5',
    imgSrc: '../assets/img/5.png',
    title: 'The Narrative',
    text: '"The Narrative" unfolds as the omnipresent thread weaving through the fabric of the algorithmic society.',
  },
  {
    bgClass: 'bg-7',
    imgSrc: '../assets/img/7.png',
    title: 'The Opulence',
    text: '"The Opulence" epitom8zes the cognitive elite\'s wealth in the algorithmic society, where opulent thoughts and experiences shape the societal narrative.',
  },
  {
    bgClass: 'bg-8',
    imgSrc: '../assets/img/8.png',
    title: 'The Opulence',
    text: '"The Opulence" epitomizes the cognitive elite\'s wealth in the algorithmic society, where opulent thoughts and experiences shape the societal narrative.',
  },
  {
    bgClass: 'bg-9',
    imgSrc: '../assets/img/9.png',
    title: 'The Opulence',
    text: '"The Opulence" epitomizes the cognitive elite\'s wealth in the algorithmic society, where opulent thoughts and experiences shape the societal narrative.',
  },
];

const Content = () => (
  <>
    <div className="content content--highlight content--intro">
      <p className="text-large">As data conglomerates reveled in the opulence of cognitive wealth, a silent underclass manifested, condemned to the digital periphery.</p>
    </div>
    {contentData.map((item, index) => (
      <div key={index} className={`content content--sticky content--grid ${item.bgClass}`}>
        <img className="content__img content__img--large content__img--left" src={item.imgSrc} alt={item.title} />
        <h2 className="content__title"><i>{item.title.split(' ')[0]}</i> {item.title.split(' ')[1]}</h2>
        <p className="content__text content__text--left text-meta">{item.text}</p>
      </div>
    ))}
    <div className="content content--highlight content--outro">
      <p className="text-large">Lost in perpetual dependency, inhabitants of the Synthetic Era found solace in cryptic simulations, where pain ebbed and cognitive loads momentarily lightened.</p>
      {/* <img className="content__img spacer" src="img/4.png" alt="Outro" /> */}
    </div>
  </>
);

export default Content;
