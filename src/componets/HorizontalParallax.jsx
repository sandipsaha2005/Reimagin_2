import React, { useRef,useState ,useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import styles from './HorizontalParallax.css';
// import styles from './index.css'
import styles from './HorizontalParallax.module.css';

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export default function HorizontalParallax() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const elementStyle = {
    transform: `translateY(${scrollY}px)`,
    transition: 'transform 0.3s ease-out',
  };

  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={3} horizontal style={elementStyle}>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}
