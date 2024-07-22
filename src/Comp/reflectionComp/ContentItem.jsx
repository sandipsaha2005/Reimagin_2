import React from 'react';

const ContentItem = ({ img, title }) => (
  <figure className="item">
    <div className="item__inner">
      <div className="item__img">
        <div className="item__img-inner" style={{ backgroundImage: `url(${img})` }}></div>
      </div>
      <figcaption className="item__caption">
        <h3 className="item__caption-title">{title}</h3>
      </figcaption>
    </div>
  </figure>
);

export default ContentItem;
