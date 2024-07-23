import React, { useEffect } from "react";
import { preloadImages, getGrid } from "./utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./App.css";
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';
import four from './img/4.jpg';
import five from './img/5.jpg';
import six from './img/6.jpg';
// import seven from './img/7.jpg';
import eight from './img/8.jpg';
import nine from './img/9.jpg';
import ten from './img/10.jpg';
import eleven from './img/11.jpg';
import twelve from './img/12.jpg';
import thirteen from './img/13.jpg';
import fourteen from './img/14.jpg';
import fifteen from './img/15.jpg';
import sixteen from './img/16.jpg';
import seventeen from './img/17.jpg';
import eighteen from './img/18.jpg';
import nineteen from './img/19.jpg';
import twenty from './img/20.jpg';
import twentyOne from './img/21.jpg';
import twentyTwo from './img/22.jpg';
import twentyThree from './img/23.jpg';
import twentyFour from './img/24.jpg';
import twentyFive from './img/25.jpg';
import twentySix from './img/26.jpg';
import twentySeven from './img/27.jpg';
import twentyEight from './img/28.jpg';
import twentyNine from './img/29.jpg';
import thirty from './img/30.jpg';
import thirtyOne from './img/31.jpg';
import thirtyTwo from './img/32.jpg';
import thirtyThree from './img/33.jpg';
import thirtyFour from './img/34.jpg';
import thirtyFive from './img/35.jpg';
import thirtySix from './img/36.jpg';
import thirtySeven from './img/37.jpg';
import thirtyEight from './img/38.jpg';
import thirtyNine from './img/39.jpg';
import forty from './img/40.jpg';
import fortyOne from './img/41.jpg';
import fortyTwo from './img/42.jpg';
import fortyThree from './img/43.jpg';
import fortyFour from './img/44.jpg';
import fortyFive from './img/45.jpg';
import fortySix from './img/46.jpg';
import fortySeven from './img/47.jpg';
import fortyEight from './img/48.jpg';
import fortyNine from './img/49.jpg';
import fifty from './img/50.jpg';
import fiftyOne from './img/51.jpg';
import fiftyTwo from './img/52.jpg';
import fiftyThree from './img/53.jpg';
import fiftyFour from './img/54.jpg';
import fiftyFive from './img/55.jpg';
import fiftySix from './img/56.jpg';
import fiftySeven from './img/57.jpg';
import fiftyEight from './img/58.jpg';
import fiftyNine from './img/59.jpg';
import sixty from './img/60.jpg';
import sixtyOne from './img/61.jpg';
import sixtyTwo from './img/62.jpg';
import sixtyThree from './img/63.jpg';
import sixtyFour from './img/64.jpg';
import sixtyFive from './img/65.jpg';
import sixtySix from './img/66.jpg';
import sixtySeven from './img/67.jpg';
import sixtyEight from './img/68.jpg';
import sixtyNine from './img/69.jpg';
import seventy from './img/70.jpg';
import seventyOne from './img/71.jpg';
import seventyTwo from './img/72.jpg';
import seventyThree from './img/73.jpg';
import seventyFour from './img/74.jpg';
import seventyFive from './img/75.jpg';


const GridComponent = () => {
  useEffect(() => {
    const initSmoothScrolling = () => {
      const lenis = new Lenis({
        lerp: 0.05,
        smoothWheel: true,
      });

      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };
    const getRandomValue = (min, max, seed) => {
      const random = Math.sin(seed++) * 10000;
      return min + (random - Math.floor(random)) * (max - min);
    };

    const applyAnimation = (grid, animationType) => {
      const gridWrap = grid.querySelector(".grid-wrap");
      const gridItems = grid.querySelectorAll(".grid__item");
      const gridItemsInner = [...gridItems].map((item) =>
        item.querySelector(".grid__item-inner")
      );

     

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: gridWrap,
          start: "top bottom+=5%",
          end: "bottom top-=5%",
          scrub: true,
        },
      });

      let seed = 1; // Initialize a seed for random values

      switch (animationType) {
        case "type1":
          grid.style.setProperty("--perspective", "1000px");
          grid.style.setProperty("--grid-width", "120%");

          timeline
            .set(gridWrap, { rotationY: 25 })
            .set(gridItems, { z: () => getRandomValue(-1600, 200, seed++) })
            .fromTo(
              gridItems,
              { xPercent: () => getRandomValue(-1000, -500, seed++) },
              { xPercent: () => getRandomValue(500, 1000, seed++) },
              0
            )
            .fromTo(gridItemsInner, { scale: 2 }, { scale: 0.5 }, 0);

          break;

        case "type2":
          grid.style.setProperty("--grid-width", "160%");
          grid.style.setProperty("--perspective", "2000px");
          grid.style.setProperty("--grid-item-ratio", "0.9");
          grid.style.setProperty("--grid-columns", "6");
          grid.style.setProperty("--grid-gap", "8vw");

          timeline
            .set(gridWrap, { rotationX: 20 })
            .set(gridItems, { z: () => getRandomValue(-3000, -1000, seed++) })
            .fromTo(
              gridItems,
              {
                yPercent: () => getRandomValue(100, 1000, seed++),
                rotationY: -45,
                filter: "brightness(200%)",
              },
              {
                ease: "power2",
                yPercent: () => getRandomValue(-1000, -100, seed++),
                rotationY: 45,
                filter: "brightness(0%)",
              },
              0
            )
            .fromTo(
              gridWrap,
              { rotationZ: -5 },
              { rotationX: -20, rotationZ: 10, scale: 1.2 },
              0
            )
            .fromTo(gridItemsInner, { scale: 2 }, { scale: 0.5 }, 0);

          break;
        case "type3":
          // Set some CSS related style values
          grid.style.setProperty("--grid-width", "100%");
          grid.style.setProperty("--grid-columns", "8");
          grid.style.setProperty("--perspective", "1500px");
          grid.style.setProperty("--grid-inner-scale", "1");

          timeline
            .set(gridItems, {
              transformOrigin: "50% 0%",
              z: () => getRandomValue(-5000, -2000, seed++),
              rotationX: () => getRandomValue(-65, -25, seed++),
              filter: "brightness(100%)",
            })
            .to(
              gridItems,
              {
                xPercent: () => getRandomValue(-150, 150, seed++),
                yPercent: () => getRandomValue(-300, 300, seed++),
                rotationX: 0,
                filter: "brightness(100%)",
              },
              0
            )
            .to(
              gridWrap,
              {
                z: 6500,
              },
              0
            )
            .fromTo(
              gridItemsInner,
              {
                scale: 2,
              },
              {
                scale: 0.5,
              },
              0
            );

          break;
        case "type4":
          // Set some CSS related style values
          grid.style.setProperty("--grid-width", "50%");
          grid.style.setProperty("--perspective", "3000px");
          grid.style.setProperty("--grid-item-ratio", "0.8");
          grid.style.setProperty("--grid-columns", "3");
          grid.style.setProperty("--grid-gap", "1vw");

          timeline
            .set(gridWrap, {
              transformOrigin: "0% 50%",
              rotationY: 30,
              xPercent: -75,
            })
            .set(gridItems, {
              transformOrigin: "50% 0%",
            })
            .to(
              gridItems,
              {
                duration: 0.5,
                ease: "power2",
                z: 500,
                stagger: 0.04,
              },
              0
            )
            .to(
              gridItems,
              {
                duration: 0.5,
                ease: "power2.in",
                z: 0,
                stagger: 0.04,
              },
              0.5
            )
            .fromTo(
              gridItems,
              {
                rotationX: -70,
                filter: "brightness(120%)",
              },
              {
                duration: 1,
                rotationX: 70,
                filter: "brightness(0%)",
                stagger: 0.04,
              },
              0
            );

          break;
        case "type5":
          // Set some CSS related style values
          grid.style.setProperty("--grid-width", "120%");
          grid.style.setProperty("--grid-columns", "8");
          grid.style.setProperty("--grid-gap", "0");

          const gridObj = getGrid(gridItems);

          timeline
            .set(gridWrap, {
              rotationX: 50,
            })
            .to(gridWrap, {
              rotationX: 30,
            })
            .fromTo(
              gridItems,
              {
                filter: "brightness(0%)",
              },
              {
                filter: "brightness(100%)",
              },
              0
            )
            .to(
              gridObj.rows("even"),
              {
                xPercent: -100,
                ease: "power1",
              },
              0
            )
            .to(
              gridObj.rows("odd"),
              {
                xPercent: 100,
                ease: "power1",
              },
              0
            )
            .addLabel("rowsEnd", ">-=0.15")
            .to(
              gridItems,
              {
                ease: "power1",
                yPercent: () => getRandomValue(-100, 200, seed++),
              },
              "rowsEnd"
            );
          break;
        case "type6":
          // Set some CSS related style values
          grid.style.setProperty("--perspective", "2500px");
          grid.style.setProperty("--grid-width", "100%");
          grid.style.setProperty("--grid-gap", "4");
          grid.style.setProperty("--grid-columns", "4");
          grid.style.setProperty("--grid-item-ratio", "1");

          timeline.fromTo(
            gridItems,
            {
              transformOrigin: "50% 200%",
              rotationX: 0,
              yPercent: 400,
            },
            {
              yPercent: 0,
              rotationY: 360,
              opacity: 0.2,
              scale: 0.8,
              stagger: 0.03,
            }
          );

          break;

        // Add the rest of the animation cases here...

        // Add the rest of the animation cases here...

        default:
          console.error("Unknown animation type.");
          break;
      }
    };

    const scroll = () => {
      const grids = document.querySelectorAll(".grid");
      grids.forEach((grid, i) => {
        let animationType;
        switch (i % 6) {
          case 0:
            animationType = "type1";
            break;
          case 1:
            animationType = "type2";
            break;
          case 2:
            animationType = "type3";
            break;
          case 3:
            animationType = "type4";
            break;
          case 4:
            animationType = "type5";
            break;
          case 5:
            animationType = "type6";
            break;
          default:
            break;
        }
        applyAnimation(grid, animationType);
      });
    };

    preloadImages(".grid__item-inner").then(() => {
      initSmoothScrolling();
      scroll();
      document.body.classList.remove("loading");
    });
  }, []);
  
  const images1 = [
    one, two, three, four, five, six, eight, nine, ten,
    eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
    twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven, twentyEight, twentyNine, thirty,
    thirtyOne, thirtyTwo, thirtyThree, thirtyFour, thirtyFive, thirtySix, thirtySeven, thirtyEight, thirtyNine, forty,
    
  ];
  const images2 = [
    fortyOne, fortyTwo, fortyThree, fortyFour, fortyFive, fortySix, fortySeven, fortyEight, fortyNine, fifty,
    fiftyOne, fiftyTwo, fiftyThree, fiftyFour, fiftyFive, fiftySix, fiftySeven, fiftyEight, fiftyNine, sixty,
    sixtyOne, sixtyTwo, sixtyThree, sixtyFour, sixtyFive, sixtySix, sixtySeven, sixtyEight, sixtyNine,seventy,
    seventyOne,seventyTwo,seventyThree,seventyFour,seventyFive
  ];
  const images3 = [
    one, two, three, four, five, six, eight, nine, ten,
    eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
    twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven, twentyEight, twentyNine, thirty,
    thirtyOne, thirtyTwo, thirtyThree, thirtyFour, thirtyFive, thirtySix, thirtySeven, thirtyEight, thirtyNine, forty,
    
  ];
  const images4 = [
    one, two, three,  twentyNine, thirty,
    thirtyOne, thirtyTwo, thirtyThree, thirtyFour, thirtyFive, thirtySix, thirtySeven, thirtyEight, thirtyNine, forty,
    fortyOne, fortyTwo, fortyThree, sixtySeven, sixtyEight, sixtyNine,seventy,
    seventyOne,seventyTwo,seventyThree,seventyFour,seventyFive
  ];
  const images5 = [
    one, two, three, four, five, six, eight, nine, ten,
    eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
    twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven, twentyEight, twentyNine, thirty,
    thirtyOne, fiftyNine, sixty,
    sixtyOne, sixtyTwo, sixtyThree, sixtyFour, sixtyFive, sixtySix, sixtySeven, sixtyEight, sixtyNine,seventy,
    seventyOne,seventyTwo,seventyThree,seventyFour,seventyFive
  ];
  const images6 = [
    one, two, three, four, five, six, eight, nine, ten,
    eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
    seventyOne,seventyTwo,seventyThree,seventyFour,seventyFive
  ];

  return (
    <main>
      <div className="intro">
        <h1 className="intro__title">
          <span className="intro__title-pre text-[#FFCC00] mb-5">UNLEASH THE ACTION</span>
          <span className="intro__title-sub">Epic Mobile Legends</span>
        </h1>
        <span className="intro__info">
          Scroll down to dive into the action and experience the thrill of the
          battlefield!
        </span>
      </div>
      <section className="content">
        <div className="grid grid--1">
          <div className="grid-wrap">
            {/* Add grid items here */}
            {images1.map((image, index) => (
            <div className="grid__item" key={index}>
              <div className="grid__item-inner" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}


          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top bg-clip-text text-transparent bg-gradient-to-b from-[#FFCC00]  to-neutral-300">
          Command Your Hero's <br />Dominate the Arena!
        </h3>
        
      </section>
      <section className="content">
        <div className="grid grid--2">
          <div className="grid-wrap">
            {/* Add grid items here */}
            {/* {images2.map((image, index) => (
            <div className="grid__item" key={index}>
              <div className="grid__item-inner" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))} */}
          </div>
        </div>
        {/* <h3 className="content__title content__title--right content__title--top">
        Join the Fight <br /> Lead Your Team!
        </h3> */}
      </section>
      <section className="content content--spacing">
        <div className="grid grid--3">
          <div className="grid-wrap">
            {/* Add grid items here */}
            {images3.map((image, index) => (
            <div className="grid__item" key={index}>
              <div className="grid__item-inner" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top bg-clip-text text-transparent bg-gradient-to-b from-[#FFCC00] to-neutral-300">
        Team Up, Fight On, Win Big! 
        </h3>
      </section>
      <section className="content content--spacing">
        <div className="grid grid--4">
          <div className="grid-wrap">
            {/* Add grid items here */}
            {images4.map((image, index) => (
            <div className="grid__item" key={index}>
              <div className="grid__item-inner" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
          </div>
        </div>
        <h3 className="content__title content__title--right bg-clip-text text-transparent bg-gradient-to-b from-[#FFCC00] to-neutral-300">
        Forge Your Legacy <br />in Every Battle! 
        </h3>
        <br />
      </section>
      <section className="content content--spacing">
        <div className="grid grid--5">
          <div className="grid-wrap">
            {/* Add grid items here */}
            {images5.map((image, index) => (
            <div className="grid__item" key={index}>
              <div className="grid__item-inner" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
          </div>
        </div>
        <h3 className="content__title content__title--right bg-clip-text text-transparent bg-gradient-to-b from-[#FFCC00] to-neutral-300">
        The Ultimate <br /> Mobile Battle Experience! 
        </h3>
      </section>
      {/* <section className="content content--spacing s-6">
        <div className="grid grid--6">
          <div className="grid-wrap">
            {images6.map((image, index) => (
            <div className="grid__item" key={index}>
              <div className="grid__item-inner" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
        Epic Battles  <br /> in the Palm of Your Hand!
        </h3>
      </section> */}
    </main>
  );
};

export default GridComponent;
