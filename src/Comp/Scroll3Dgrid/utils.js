import imagesLoaded from 'imagesloaded';


// utils.js
export const preloadImages = (selector) => {
    return new Promise((resolve) => {
      const images = [...document.querySelectorAll(selector)];
      let loadedCount = 0;
      images.forEach((img) => {
        const imgElem = new Image();
        imgElem.src = img.style.backgroundImage.slice(5, -2);
        imgElem.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            resolve();
          }
        };
      });
    });
  };
  
  export const getGrid = (gridItems) => {
    return {
      rows: (type) => {
        const items = [...gridItems];
        const half = Math.ceil(items.length / 2);
        if (type === 'even') {
          return items.slice(half);
        } else if (type === 'odd') {
          return items.slice(0, half);
        }
        return [];
      },
    };
  };
  
