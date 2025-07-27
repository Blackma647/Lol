// 🎈 Balloons
function createBalloons() {
  const colors = ['#ff4081', '#ffca28', '#66bb6a', '#29b6f6'];
  const balloonContainer = document.getElementById('balloons');
  
  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
    balloon.style.width = '30px';
    balloon.style.height = '40px';
    balloon.style.borderRadius = '50%';
    balloon.style.position = 'absolute';
    balloon.style.bottom = '-60px';
    balloon.style.animationName = 'floatUp';
    balloon.style.animationTimingFunction = 'ease-in';
    balloon.style.animationIterationCount = 'infinite';
    balloonContainer.appendChild(balloon);
  }
}

document.head.insertAdjacentHTML('beforeend', `
  <style>
    @keyframes floatUp {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-120vh); opacity: 0; }
    }
  </style>
`);

createBalloons();

// 🎉 Confetti
function createConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    update();
  }

  function update() {
    confetti.forEach(p => {
      p.y += Math.cos(p.d) + 1;
      p.x += Math.sin(p.d);
      p.tiltAngle += 0.05;
      p.tilt = Math.sin(p.tiltAngle) * 10;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  (function loop() {
    draw();
    requestAnimationFrame(loop);
  })();
}

window.onload = createConfetti;

// 🔊 Music
function playSurprise() {
  document.getElementById('bgMusic').play();
  alert('🎉 Enjoy your birthday surprise!');
}
function redirectToLogin() {
  window.location.href = "login.html";
}
