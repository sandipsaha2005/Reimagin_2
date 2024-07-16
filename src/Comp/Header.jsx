import React from 'react';

const Header = () => (
  <header className="frame frame--header" style={{ backgroundImage: 'url(img/5.png)' }}>
    <h1 className="frame__title">Sticky Sections</h1>
    <a className="frame__back" href="https://tympanus.net/codrops/?p=75532">Article</a>
    <a className="frame__prev" href="http://tympanus.net/Development/ScrollCarousel/">Previous demo</a>
    <a className="frame__sub" href="https://tympanus.net/codrops/collective/">Subscribe to our frontend news</a>
   
    <div className="frame__heading">
      <h2 className="content__title"><i>The</i> Periphery</h2>
      <p className="text-meta">An exploration of the Synthetic Era.</p>
    </div>
  </header>
);

export default Header;
