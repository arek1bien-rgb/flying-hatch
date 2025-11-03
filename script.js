const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stickerCount = 12;
const stickers = [];

const img = new Image();
img.src = "sticker.png";

img.onload = () => {
  for (let i = 0; i < stickerCount; i++) {
    stickers.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
      size: 100 + Math.random() * 40
    });
  }
  animate();
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,30,0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const s of stickers) {
    ctx.drawImage(img, s.x, s.y, s.size, s.size);
    s.x += s.dx;
    s.y += s.dy;

    if (s.x <= 0  s.x + s.size >= canvas.width) s.dx *= -1;
    if (s.y <= 0  s.y + s.size >= canvas.height) s.dy *= -1;
  }

  requestAnimationFrame(animate);
}