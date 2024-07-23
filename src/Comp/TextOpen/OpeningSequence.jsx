import React, { useEffect } from 'react';
// import $ from 'jquery';
import './jquery.lettering.js';
import './component.css';
import './default.css';

const OpeningSequence = () => {
  useEffect(() => {
    $("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
  }, []);

  return (
    <div className="container">
      <div className="os-phrases" id="os-phrases">
        {/* <h2>Wait...something is </h2> */}
        <h2>Something awaits...</h2>
        <h2>Get ready...</h2>
        <h2>For the ultimate clash! </h2>
      </div>
    </div>
  );
};

export default OpeningSequence;
