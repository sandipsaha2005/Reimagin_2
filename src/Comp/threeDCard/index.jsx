import React from 'react';
// import Image from 'react-image';
// import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from './Ui';

export function ThreeDCardDemo({src,title,desc,bg}) {
  // console.log(src);
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#09090b]  w-auto sm:w-[40rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          // className="text-xl font-bold text-neutral-600 dark:text-white"
          className={`text-3xl tracking-widest font-bold ${bg} mb-2`}
        >
          {title}
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={src}
             height="1000"
            width="1000"
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-base max-w-xl mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}