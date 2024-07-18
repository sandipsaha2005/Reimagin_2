import React, { useEffect } from 'react';
import './App.css';
import { preloadImages } from './utils';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header';
import Content from './content';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const Sticky = () => {
  useEffect(() => {
    const contentElements = document.querySelectorAll('.content--sticky');
    const totalContentElements = contentElements.length;

    const initSmoothScrolling = () => {
      const lenis = new Lenis({
        lerp: 0.05,
        smoothWheel: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      contentElements.forEach((el, position) => {
        const isLast = position === totalContentElements - 1;

        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        })
          .set(el, {
            transformOrigin: `${position % 2 === 0 ? 2 : 98}% ${isLast ? 0 : 2}%`,
          })
          .to(
            el,
            {
              ease: 'none',
              scale: 0,
              yPercent: isLast ? 100 : 0,
              rotation: position % 2 === 0 ? 10 : -10,
            },
            0
          );
      });
    };

    const init = () => {
      initSmoothScrolling();
      scroll();
    };

    preloadImages('.content__img').then(() => {
      document.body.classList.remove('loading');
      init();
    });
  }, []);

  return (
    <main>
      {/* <Header /> */}
      <div className="wrap">
        <Content />
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Sticky;
