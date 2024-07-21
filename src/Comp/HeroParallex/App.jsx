"use client";
import React from "react";
import { HeroParallax } from "./ui";

export function HeroParallaxDemo() {
  return (
    <div>
      <HeroParallax products={products} />
      {/* <ul>
        {products.map((product, index) => (
          <li key={index}>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export const products = [
  {
    title: "VALIR",
    link: "https://gomoonbeam.com",
    thumbnail: "https://www.icegif.com/wp-content/uploads/2023/02/icegif-1117.gif",
  },
  {
    title: "CHOU",
    link: "https://cursor.so",
    thumbnail: "https://i.pinimg.com/originals/bd/72/3d/bd723ddfda02d53ad142787f55ff601d.gif",
  },
  {
    title: "FRANCO",
    link: "https://userogue.com",
    thumbnail: "https://i.makeagif.com/media/2-26-2021/KvUaKr.gif",
  },
  {
    title: "DYRROTH",
    link: "https://editorially.org",
    thumbnail: "https://pa1.aminoapps.com/7345/b84c4d94e8af89a92f32cd0733e400bf0928a031r1-554-298_hq.gif",
  },
  {
    title: "LANCLORT",
    link: "https://editrix.ai",
    thumbnail: "https://www.icegif.com/wp-content/uploads/2023/02/icegif-1120.gif",
  },
  {
    title: "HAYABUSA",
    link: "https://app.pixelperfect.quest",
    thumbnail: "https://i.makeagif.com/media/2-05-2021/B78oOk.gif",
  },
  {
    title: "HANABI",
    link: "https://algochurn.com",
    thumbnail: "https://64.media.tumblr.com/73d7ab35314f93128ac46a7229faf0a6/1aa98dd9f56ce2a9-fe/s540x810/e9eb0c9ffbb7cc6b390b047f4ddab8f6693f6e19.gifv",
  },
  {
    title: "LING",
    link: "https://ui.aceternity.com",
    thumbnail: "https://64.media.tumblr.com/54af38948191ffff36babc7d862672ff/406a8ea9be27e3b8-40/s500x750/af7e62ee315ac0c3bc3372895ce089dfa9b628b2.gifv",
  },
  {
    title: "FREYA",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://i.makeagif.com/media/9-08-2022/L6sOO5.gif",
  },
  {
    title: "HANZO",
    link: "https://smartbridgetech.com",
    thumbnail: "https://pa1.aminoapps.com/7345/292b74fff7f786b08db661a3530672677171c793r1-551-345_hq.gif",
  },
  
];