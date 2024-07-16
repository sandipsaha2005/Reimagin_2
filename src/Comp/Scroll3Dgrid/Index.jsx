import React, { useEffect } from 'react';
import { preloadImages, getGrid } from './utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './App.css';

const GridComponent = () => {
  useEffect(() => {
    const initSmoothScrolling = () => {
      const lenis = new Lenis({
        lerp: 0.02,
        smoothWheel: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const applyAnimation = (grid, animationType) => {
      const gridWrap = grid.querySelector('.grid-wrap');
      const gridItems = grid.querySelectorAll('.grid__item');
      const gridItemsInner = [...gridItems].map((item) => item.querySelector('.grid__item-inner'));

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: gridWrap,
          start: 'top bottom+=5%',
          end: 'bottom top-=5%',
          scrub: true,
        },
      });

      switch (animationType) {
        case 'type1':
          grid.style.setProperty('--perspective', '1000px');
          grid.style.setProperty('--grid-width', '120%');

          timeline
            .set(gridWrap, { rotationY: 25 })
            .set(gridItems, { z: () => gsap.utils.random(-1600, 200) })
            .fromTo(gridItems, { xPercent: () => gsap.utils.random(-1000, -500) }, { xPercent: () => gsap.utils.random(500, 1000) }, 0)
            .fromTo(gridItemsInner, { scale: 2 }, { scale: 0.5 }, 0);

          break;

        case 'type2':
          grid.style.setProperty('--grid-width', '160%');
          grid.style.setProperty('--perspective', '2000px');
          grid.style.setProperty('--grid-item-ratio', '0.9');
          grid.style.setProperty('--grid-columns', '6');
          grid.style.setProperty('--grid-gap', '8vw');

          timeline
            .set(gridWrap, { rotationX: 20 })
            .set(gridItems, { z: () => gsap.utils.random(-3000, -1000) })
            .fromTo(gridItems, { yPercent: () => gsap.utils.random(100, 1000), rotationY: -45, filter: 'brightness(200%)' }, { ease: 'power2', yPercent: () => gsap.utils.random(-1000, -100), rotationY: 45, filter: 'brightness(0%)' }, 0)
            .fromTo(gridWrap, { rotationZ: -5 }, { rotationX: -20, rotationZ: 10, scale: 1.2 }, 0)
            .fromTo(gridItemsInner, { scale: 2 }, { scale: 0.5 }, 0);

          break;

        // Add the rest of the animation cases here...

        default:
          console.error('Unknown animation type.');
          break;
      }
    };

    const scroll = () => {
      const grids = document.querySelectorAll('.grid');
      grids.forEach((grid, i) => {
        let animationType;
        switch (i % 6) {
          case 0:
            animationType = 'type1';
            break;
          case 1:
            animationType = 'type2';
            break;
          case 2:
            animationType = 'type3';
            break;
          case 3:
            animationType = 'type4';
            break;
          case 4:
            animationType = 'type5';
            break;
          case 5:
            animationType = 'type6';
            break;
          default:
            break;
        }
        applyAnimation(grid, animationType);
      });
    };

    preloadImages('.grid__item-inner').then(() => {
      initSmoothScrolling();
      scroll();
      document.body.classList.remove('loading');
    });
  }, []);

  return (
    <main>
      <div className="intro">
        <h1 className="intro__title">
          <span className="intro__title-pre">UNLEASH THE ACTION</span>
          <span className="intro__title-sub">Epic Mobile Legends</span>
        </h1>
        <span className="intro__info">Scroll down to dive into the action and experience the thrill of the battlefield!</span>
      </div>
      <section className="content">
        <div className="grid grid--1">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
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
        <h3 className="content__title content__title--right content__title--top">Command Your Hero's <br /> Dominate the Arena!</h3>
      </section>
      <section className="content">
        <div className="grid grid--2">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>

          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">Command Your Hero's <br /> Dominate the Arena!</h3>
      </section>
      <section className="content content--spacing">
        <div className="grid grid--3">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>

          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">Command Your Hero's <br /> Dominate the Arena!</h3>
      </section>
      <section className="content content--spacing">
        <div className="grid grid--4">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>

          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">Command Your Hero's <br /> Dominate the Arena!</h3>
      </section>
      <section className="content content--spacing">
        <div className="grid grid--5">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>

          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">Command Your Hero's <br /> Dominate the Arena!</h3>
      </section>
      <section className="content content--spacing s-6">
        <div className="grid grid--6">
          <div className="grid-wrap">
            {/* Add grid items here */}
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>
            <div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: 'url(https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649)' }}></div></div>

          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">Command Your Hero's <br /> Dominate the Arena!</h3>
      </section>
      
    </main>
  );
};

export default GridComponent;
