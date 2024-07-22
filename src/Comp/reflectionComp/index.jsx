import React, { useEffect } from 'react';
import ContentItem from './ContentItem';
import { preloadImages } from './utils';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const Reflect = () => {
  useEffect(() => {
    const initSmoothScrolling = () => {
      const lenis = new Lenis({
        lerp: 0.2,
        smoothWheel: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);

        document.querySelector('.content--reflection').style.transform = `translateY(${-lenis.actualScroll}px)`;
      };
      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      const contentItems = [...document.querySelectorAll('.content .item__inner')];
      const reflectionItems = [...document.querySelectorAll('.content--reflection .item__inner')];

      contentItems.forEach((item, pos) => {
        const reflectionItem = reflectionItems[pos];

        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
        .fromTo([item, reflectionItem], {
          transformOrigin: '50% 120%',
          filter: 'contrast(120%) brightness(100%)',
        }, {
          ease: 'power1.in',
          rotationX: 70,
          z: -300,
          scaleY: 0.8,
          filter: 'contrast(65%) brightness(30%)',
        }, 0)
        .fromTo([item.querySelector('.item__img-inner'), reflectionItem.querySelector('.item__img-inner')], {
          scale: 1,
        }, {
          ease: 'sine.inOut',
          scale: 1.3,
        }, 0);
      });
    };

    const init = () => {
      initSmoothScrolling();
      scroll();
    };

    preloadImages('.item__img-inner').then(() => {
      document.body.classList.remove('loading');
      init();
    });
  }, []);

  return (
    <main>
      <div className="content">
        <h2 className="content__title">Umot</h2>
        {['13.jpg', '14.jpg', '15.jpg', '16.jpg', '1.jpg', '2.jpg'].map((img, idx) => (
          <ContentItem key={idx} img={img} title={['MXT', 'QSY', 'VBG', 'LYQ', 'XJ9', 'ZQ8'][idx]} />
        ))}
      </div>
      <div className="wrap">
        <div className="content content--reflection">
          <h2 className="content__title">Umot</h2>
          {['13.jpg', '14.jpg', '15.jpg', '16.jpg', '1.jpg', '2.jpg'].map((img, idx) => (
            <ContentItem key={idx} img={img} title={['MXT', 'QSY', 'VBG', 'LYQ', 'XJ9', 'ZQ8'][idx]} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Reflect;
