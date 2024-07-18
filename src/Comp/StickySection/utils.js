import imagesLoaded from 'imagesloaded';

export const preloadImages = (selector) => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
};
