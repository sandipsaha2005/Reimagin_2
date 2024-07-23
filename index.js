const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#f5f5f5", 
  "#e0e0e0", 
  "#d3d3d3",
  "#c0c0c0", 
  "#b0b0b0", 
  "#a9a9a9", 
  "#9e9e9e", 
  "#8c8c8c", 
  "#787878", 
  "#6e6e6e",
  "#636363",
  "#585858", 
  "#4d4d4d", 
  "#434343", 
  "#3a3a3a", 
  "#333333", 
  "#2e2e2e", 
  "#292929", 
  "#262626", 
  "#1f1f1f", 
  "#141414" 
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
  circle.style.opacity = 1; // Initialize opacity to 1
  // console.log(`Circle ${index} initialized`);
});

let mouseStoppedTimeout;

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

  clearTimeout(mouseStoppedTimeout);
  showCircles();
  // console.log(`Mouse moved to: (${coords.x}, ${coords.y})`);

  mouseStoppedTimeout = setTimeout(hideCirclesSmoothly, 100); // Hide circles after 2 seconds of no movement
});

function hideCirclesSmoothly() {
  // console.log("Hiding circles");
  circles.forEach(circle => {
    let opacity = parseFloat(circle.style.opacity);
    const fadeOut = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fadeOut);
      } else {
        opacity -= 0.1;
        circle.style.opacity = opacity;
      }
    }, 50); // Decrease opacity every 50ms
  });
}

function showCircles() {
  // console.log("Showing circles");
  circles.forEach(circle => {
    circle.style.opacity = 1; // Show circles by setting opacity to 1
  });
}

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
