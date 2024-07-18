import React, { useEffect } from "react";
import { preloadImages, getGrid } from "./utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./App.css";

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

  return (
    <main>
      <div className="intro">
        <h1 className="intro__title">
          <span className="intro__title-pre">UNLEASH THE ACTION</span>
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
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            {/* <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(img/2.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/3.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/4.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/5.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/6.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/7.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/8.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/65.jpg)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(./img/10.jpg)' }}></div></div> */}
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
          Command Your Hero's <br /> Dominate the Arena!
        </h3>
      </section>
      <section className="content">
        <div className="grid grid--2">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
          Command Your Hero's <br /> Dominate the Arena!
        </h3>
      </section>
      <section className="content content--spacing">
        <div className="grid grid--3">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
          Command Your Hero's <br /> Dominate the Arena!
        </h3>
      </section>
      <section className="content content--spacing">
        <div className="grid grid--4">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
          Command Your Hero's <br /> Dominate the Arena!
        </h3>
      </section>
      <section className="content content--spacing">
        <div className="grid grid--5">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
          Command Your Hero's <br /> Dominate the Arena!
        </h3>
      </section>
      <section className="content content--spacing s-6">
        <div className="grid grid--6">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{
                  backgroundImage:
                    "url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
          Command Your Hero's <br /> Dominate the Arena!
        </h3>
      </section>
    </main>
  );
};

export default GridComponent;
