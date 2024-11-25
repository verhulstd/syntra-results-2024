import confetti from "canvas-confetti";

var myCanvas = document.createElement("canvas");
document.body.appendChild(myCanvas);

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
myCanvas.style.position = "absolute";

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});

// launch a few confetti from the left edge
setInterval(function () {
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  });
}, 1000);
