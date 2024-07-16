import React from 'react';

const Header = () => (
  <header className="frame frame--header" style={{ backgroundImage: 'url(img/5.png)' }}>
    <h1 className="frame__title">Sticky Sections</h1>
    <a className="frame__back" href="https://tympanus.net/codrops/?p=75532">Article</a>
    <a className="frame__prev" href="http://tympanus.net/Development/ScrollCarousel/">Previous demo</a>
    <a className="frame__sub" href="https://tympanus.net/codrops/collective/">Subscribe to our frontend news</a>
    <nav className="frame__demos">
      <a href="index.html">1</a>
      <a href="index2.html">2</a>
      <a href="index3.html">3</a>
      <a href="index4.html">4</a>
      <span>5</span>
      <a href="index6.html">6</a>
      <a href="index7.html">7</a>
      <a href="index8.html">8</a>
      <a href="index9.html">9</a>
      <a href="index10.html">10</a>
      <a href="index11.html">11</a>
      <a href="index12.html">12</a>
      <a href="index13.html">13</a>
      <a href="index14.html">14</a>
      <a href="index15.html">15</a>
    </nav>
    <div className="frame__heading">
      <h2 className="content__title"><i>The</i> Periphery</h2>
      <p className="text-meta">An exploration of the Synthetic Era.</p>
    </div>
  </header>
);

export default Header;
