import React,{useState} from 'react';
import { useTrail, a } from '@react-spring/web';
import styles from './styles.module.css' // Assuming you use CSS for styles

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function TrailDemo() {
    const [open, set] = useState(true)
    const handleChange=()=>{
        console.log(open);
        set(!open)
    }
    return (// adjus the height whoami
      <div className={styles.container} style={{height:'400px'}} onClick={handleChange}>
        <Trail open={open}>
          <span>Lorem</span>
          <span>Ipsum</span>
          <span>Dolor</span>
          <span>Sit</span>
        </Trail>
      </div>
    )
  }
