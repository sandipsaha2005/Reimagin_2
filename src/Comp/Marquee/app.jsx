import { cn } from "../../utils/cn";
import Marquee from "./ui";
import React from "react";
import ShineBorder from "../ShineBorder/ui";

const reviews = [
  {
    name: "Tigreal",
    username: "@tank",
    body: "Leader of the Light's Order, guardian of the Moniyan Empire.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_4e0005dbfb1376beaccc54ef7aa39375.png",
  },
  {
    name: "Fredrinn",
    username: "@tank",
    body: "A master treasure appraiser in Los Pecados accumulating wealth.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_3f574825bd9192094f047a4abc6d5d05.png",
  },
  {
    name: "Baxia",
    username: "@tank",
    body: "The Mystic Tortoise of the Oriental Fighters, a shield- wielding,",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_ae43a252fda0fe996322ea8d27a6fe69.png",
  },
  {
    name: "Johnson",
    username: "@tank",
    body: "A super cyborg who can transform into a car and lead his teammates into battle.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_9939e5cc09011a287a989b7d4b3aec4d.png",
  },
  {
    name: "Atlas",
    username: "@tank",
    body: "Abysmal Sea creature who roke free from the seal.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_1fa7b5bb5ddc89246d65e199c6e3b22f.png",
  },
  {
    name: "Carmilla",
    username: "@tank",
    body: "The girl who became a Blood Demon for love.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_358d6ad9cff97fc3bfef8a2bd4acbadd.png",
  },
  {
    name: "Arlott",
    username: "@fighter",
    body: "A demon human hybrid wielding two lances with a thirst for vengeance",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_01450fec4397f8780ce0d11ab652c73d.png",
  },
  {
    name: "Yin",
    username: "@fighter",
    body: "A young martial artist on a joumey to defeat the Evil God that dwells within him.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_92/100_95836476311e2026077d87eb2373a281.png",
  },
  {
    name: "Dyrroth",
    username: "@fighter",
    body: "Prince of the Empire who was kidnapped and used by the Abyss.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_c999d5c218a0860ffbd7647a02baef1d.png",
  },
  {
    name: "Yu Zhong",
    username: "@fighter",
    body: "Yu Zhong, the reincamation of the Black Dragon, intends to unify the Cadia Riverlands",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_92/100_7d5ad4d511f5257137028f19e9ee973f.png",
  },
  {
    name: "Julian",
    username: "@fighter",
    body: "A Raven assassin of the Church of Light, a young boy who's in search of his home",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_44891c699fb1c00fc4a7fa59ea95b8b3.png",
  },
  {
    name: "Aulus",
    username: "@fighter",
    body: "A Leonin warrior that fights to prove himself.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_55751a5c47dc36cb6c1da705c5f5c687.png",
  },
  {
    name: "Gusion",
    username: "@assassin",
    body: "Rebellious son of House Paxley.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_82dbd20a7d0f274520895007898199e0.png",
  },
  {
    name: "Lancelot",
    username: "@assassin",
    body: "Prodigal son and genius swordsman of House Baroque.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_db7d20dd6e7a9f958ad210680dc2ba7b.png",
  },
  {
    name: "Hayabusa",
    username: "@assassin",
    body: "Leader of the Scarlet Shadow's Shadow sect, upon the Cadia Riverlands.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_63cb1f44bf906b71767a000e38d8ab14.png",
  },
  {
    name: "Hanzo",
    username: "@assassin",
    body: "Genius ninja in the Shadow Sect who is at the crossroads.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_da171b775c57f0bee270d569215d92af.png",
  },
  {
    name: "Aamon",
    username: "@assassin",
    body: "The aloof Duke of Castle Abereen.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_c9e4d330229c88b1e78ef88ce9db4223.png",
  },
  {
    name: "Natalia",
    username: "@mage",
    body: "An assassin exiled by the Empire.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_67fa418c9efe0a0c29112067b9ddfcd5.png",
  },
  {
    name: "Valir",
    username: "@mage",
    body: "Heir to Fire Throat, fire mage.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_cd4c780c0ed639e2889c1131e56638ec.png",
  },
  {
    name: "Vale",
    username: "@mage",
    body: "Heir to Wind Fort, wind mage.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_80d3dd1f4cb10ffebb84289be46a3ecb.png",
  },
  {
    name: "Pharsa",
    username: "@mage",
    body: "Crow Princess of Askati Forest.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_cccf53dbeacc789288ebc1fb63fcf7dd.png",
  },
  {
    name: "Zhask",
    username: "@mage",
    body: "King of the Swarm who disrupts the balance of the universe.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_7e69b480400b37dd75614f0c8d033c37.png",
  },
  {
    name: "Zhuxin",
    username: "@mage",
    body: "A mysterious young woman who guides the ember buterflies using her Lantem.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_92/100_13cfeec4bec7a27a09677e519f1ef9d2.png",
  },
  {
    name: "Cecilion",
    username: "@mage",
    body: "Carmilla's Blood Demon lover.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_af02ce891528cd3576858589d8d33d8d.png",
  },
  {
    name: "Layla",
    username: "@marksman",
    body: "The backbone of the Eruditio Rangers who is also known as the Shining Star.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_6efe9abc2047f59d45fa1c88fb1261b7.png",
  },
  {
    name: "Melissa",
    username: "@marksman",
    body: "A girl with cursed needles who runs a tailor shop and solves problems for clients.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_566636fa333651ef67931deade4eef84.png",
  },
  {
    name: "Wanwan",
    username: "@marksman",
    body: "The Agile Tiger of the Oriental Fighters and a lively young girl",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_1abe49b2ccf8bef46395a3e8d68d8844.png",
  },
  {
    name: "Lesley",
    username: "@marksman",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_f4f42410c90f84e4d46b129d5e8887e8.png",
  },
  {
    name: "Kimmy",
    username: "@marksman",
    body: "A cool girl who loves technology and invention.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_d5270328e293fd84cb2a439813501f16.png",
  },
  {
    name: "Granger",
    username: "@marksman",
    body: "A bard, a famed Demon Hunter.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_007b545c8481814a4db1c3d09eeb0c5d.png",
  },
  {
    name: "Rafaela",
    username: "@support",
    body: "An angel loved and respected by the people of this world.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_f22e22659e8b1acfb665aec8eaffabd7.png",
  },
  {
    name: "Lolita",
    username: "@support",
    body: "Member of the Eruditio Rangers and protector of the Leviathan workshop.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_55de18c865efe8e360b3b9ae463d76a2.png",
  },
  {
    name: "Johnson",
    username: "@support",
    body: "A super cyborg who can transform into a car and lead his teammates into battle.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_9939e5cc09011a287a989b7d4b3aec4d.png",
  },
  {
    name: "Kaja",
    username: "@support",
    body: "Leader of Nazar who guards the Celestial Palace.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_87a88d7acc62a25869a5316147f3ce6a.png",
  },
  {
    name: "Chip",
    username: "@support",
    body: "A carefree, genetically enhanced fox that wields advanced portal technology.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_85e15c66733cab7d8d73f7f725f31f1e.png",
  },
  {
    name: "Xavier",
    username: "@support",
    body: "Former member of the Knights of Light who's determined to forge a path of his own.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_2f4e01714176adb56ca70eef1460e461.png",
  },
  {
    name: "Khaleed",
    username: "@support",
    body: "A sand-walking intrepid tribe Jeader.",
    img: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_216ea76d9188164c58950885b3962ba1.png",
  },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
  <ShineBorder
  className="transition duration-500 ease-in-out transform hover:scale-105 hover:bg-zinc-800 border-2 border-zinc-800 overflow-hidden hover:border-zinc-300"
  color={["#FDB515", "#FCC200", "#FFDF00"]}
>
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-2 ",
        // light styles
        // "hover:bg-gray-950/[.05]",
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
      >
      <div className="flex flex-row items-center gap-2">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            alt="" 
            src={img} 
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white uppercase">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#FFCC00]">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
      </ShineBorder>
  
  );
};



export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl gap-6">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
    </div>
  );
}
