"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
// import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui";
import Dawn from "../../assets/map/land-dawn.jpg";
import Agelta from "../../assets/map/agelta-drylands.jpg";
import Azrya from "../../assets/map/azrya-woodland.jpg";
import Moniyan from "../../assets/map/moniyan.jpg";
import North from "../../assets/map/northan-vale.jpg";
import Barren from "../../assets/map/the-barren-lands.jpg";
import Vonetis from "../../assets/map/vonetis-sea.jpg";
import Cadia from "../../assets/map/cadia-riverland.jpg";
import { ThreeDCardDemo} from '../threeDCard/index'
export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          // <div key={`content-${index}`} className="mb-10">
          //   {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
          //     {item.badge}
          //   </h2> */}

          //   <p className={`text-3xl mb-4 ${item.bg}`}>{item.title}</p>

          //   <div className="text-md  prose prose-sm dark:prose-invert">
          //     {item?.image && (
          //       <img
          //         src={item.image}
          //         alt="blog thumbnail"
          //         height="900"
          //         width="900"
          //         className="rounded-lg mb-10 object-cover"
          //       />
          //     )}
          //     {item.description}
          //   </div>
          // </div>
          <ThreeDCardDemo src={item.image} title={item.title} desc={item.description} bg={item.bg} key={index}/>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "LAND OF DAWN",
    bg: "text-[#B8860B]",
    description: (
      <>
        <p>
          It is where most of the legends and heroes lived, and where many
          battles have taken place throughout history. The eternal war between
          light and dark is a well-known example.
        </p>
      </>
    ),
    image: Dawn,
  },
  {
    title: "AGELTA DRYLANDS",
    bg: "text-[#C3A26C]",
    description: (
      <>
        <p>
          Countless fragments of history lay buried beneath the sand dunes.
          Unlike Moniyan, the next chapter of this region still waits quietly to
          be written.
        </p>
      </>
    ),

    image: Agelta,
  },
  {
    title: "AZRYA WOODLANDS",
    bg: "text-[#69B84B]",
    description: (
      <>
        <p>
          The birthplace of the Elves. A magical land blessed by the moonlight.
          During the Endless War, the forces of darkness corrupted parts of the
          Azrya Woodlands into a twisted version of its former self.
        </p>
      </>
    ),

    image: Azrya,
  },
  {
    title: "MONIYAN",
    bg: "text-[#CDD168]",
    description: (
      <>
        <p>
          Home to the great plains and the most fertile region of the Land of
          Dawn. Known in ancient times as the Land of the Gods. Now under the
          control of the human empire, where countless allegiances and betrayals
          have played their course.
        </p>
      </>
    ),

    image: Moniyan,
  },
  {
    title: "NORTHEN VALE",
    bg: "text-[#EADED4]",
    description: (
      <>
        <p>
          Ice and snow cover ancient legends, leaving only the harshest living
          conditions on the surface. Only those with fire in their hearts and an
          unyielding stubbornness can hope to survive here.
        </p>
      </>
    ),

    image: North,
  },
  {
    title: "THE BARREN LANDS",
    bg: "text-[#B65C64]",
    description: (
      <>
        <p>
          The main battlefield between the human empire and the forces of the
          Abyss. Through baptism by blood and fire, this region has become the
          harshest and most resilient land in all of Dawn.
        </p>
      </>
    ),

    image: Barren,
  },
  {
    title: "VONETIS SEA",
    bg: "text-[#139591]",
    description: (
      <>
        <p>
          These tropical waters are dotted with islands containing magnificent
          civilizations and undiscovered mysteries.
        </p>
      </>
    ),

    image: Vonetis,
  },
  {
    title: "CADIA RIVERLANDS",
    bg: "text-[#6D9C2F]",
    description: (
      <>
        <p>
           An island continent that lies across the sea
          from the main continent of Dawn. A mystical
          land to the far east that has given rise to many
          heroic warriors and legendary tales.
        </p>
      </>
    ),

    image: Cadia,
  },
];
