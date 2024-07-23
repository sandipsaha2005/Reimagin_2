import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import './base.css'; // Import the corresponding CSS file if you have one

const MenuItem = ({ name, images }) => {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeInner = marqueeInnerRef.current;

    // Define the closestEdge function
    const closestEdge = (x, y, w, h) => {
      const topEdgeDist = distMetric(x, y, w / 2, 0);
      const bottomEdgeDist = distMetric(x, y, w / 2, h);
      const min = Math.min(topEdgeDist, bottomEdgeDist);
      return min === topEdgeDist ? 'top' : 'bottom';
    };

    const distMetric = (x, y, x2, y2) => {
      const xDiff = x - x2;
      const yDiff = y - y2;
      return (xDiff * xDiff) + (yDiff * yDiff);
    };

    const handleMouseEnter = (e) => {
      const edge = findClosestEdge(e);
      gsap.timeline({ defaults: { duration: 0.6, ease: 'expo' } })
        .set(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
        .set(marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0)
        .to([marquee, marqueeInner], { y: '0%' }, 0);
    };

    const handleMouseLeave = (e) => {
      const edge = findClosestEdge(e);
      gsap.timeline({ defaults: { duration: 0.6, ease: 'expo' } })
        .to(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
        .to(marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    };

    const findClosestEdge = (e) => {
      const x = e.pageX - marqueeRef.current.offsetLeft;
      const y = e.pageY - marqueeRef.current.offsetTop;
      return closestEdge(x, y, marqueeRef.current.clientWidth, marqueeRef.current.clientHeight);
    };

    const menuLink = marquee.parentElement.querySelector('a.menu__item-link');
    menuLink.addEventListener('mouseenter', handleMouseEnter);
    menuLink.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      menuLink.removeEventListener('mouseenter', handleMouseEnter);
      menuLink.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="menu__item">
      <a className="menu__item-link" href="#">{name}</a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" aria-hidden="true" ref={marqueeInnerRef}>
            {images.map((img, index) => (
              <React.Fragment key={index}>
                <span >{name}</span>
                <div className="marquee__img" style={{ backgroundImage: `url(${img})` }}></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MenuItem;
