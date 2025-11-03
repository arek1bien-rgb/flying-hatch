const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = [];
let stickers = [];
const img = new Image();
img.src = 'sticker.png'; // <- tu wrzucisz swój plik z naklejką

// GWIAZDKI
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    o: Math.random()
  });
}

// STICKERY
for (let i = 0; i < 15; i++) {
  stickers.push({
    x: Math.random() * canvas.width,
     y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: 70 + Math.random() * 40
  });
}

function drawStars() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let s of stars) {
    s.o += (Math.random() - 0.5) * 0.05;
    if (s.o < 0) s.o = 0;
    if (s.o > 1) s.o = 1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = rgba(255,255,255,${s.o});
    ctx.fill();
  }
}

function drawStickers() {
  for (let s of stickers) {
    s.x += s.vx;
    s.y += s.vy;
    if (s.x < 0  s.x + s.size > canvas.width) s.vx *= -1;
    if (s.y < 0  s.y + s.size > canvas.height) s.vy *= -1;
    ctx.drawImage(img, s.x, s.y, s.size, s.size);
  }
}

function animate() {
  drawStars();
  drawStickers();
  requestAnimationFrame(animate);
}

img.onload = animate;

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});