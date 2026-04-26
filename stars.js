/* Persistent starfield + atlas convergence canvas */
(function () {
  const STAR_COUNT_BASE = 140;

  const cvs = document.getElementById('bg-stars');
  const ctx = cvs.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0;
  let stars = [];
  let density = 1;

  function resize() {
    W = cvs.clientWidth = window.innerWidth;
    H = cvs.clientHeight = window.innerHeight;
    cvs.width = W * dpr;
    cvs.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function seed() {
    const N = Math.round(STAR_COUNT_BASE * density);
    stars = new Array(N).fill(0).map(() => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 0.9 + 0.1, // depth
      r: Math.random() * 1.2 + 0.2,
      tw: Math.random() * Math.PI * 2,
      tws: 0.4 + Math.random() * 1.4,
      hue: Math.random() < 0.15 ? 'a' : 'w' // accent vs white
    }));
  }

  let scrollY = 0;
  let scrollVel = 0;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    scrollVel = scrollY - lastScroll;
    lastScroll = scrollY;
  }, { passive: true });

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const baseY = -scrollY * 0.06; // gentle parallax
    const drift = (t * 0.000008);
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      // drift slowly across the sky
      s.x += Math.sin(drift + i) * 0.02 * s.z;
      // parallax driven by scroll velocity (depth)
      let y = s.y + baseY * s.z * 4;
      // wrap
      y = ((y % H) + H) % H;
      const tw = 0.55 + 0.45 * Math.sin(t * 0.001 * s.tws + s.tw);
      const a = tw * (0.35 + 0.65 * s.z);
      if (s.hue === 'a') {
        ctx.fillStyle = `rgba(123, 158, 255, ${a})`;
      } else {
        ctx.fillStyle = `rgba(244, 245, 251, ${a})`;
      }
      ctx.beginPath();
      ctx.arc(s.x, y, s.r * (0.6 + s.z), 0, Math.PI * 2);
      ctx.fill();
      // glow for the brightest
      if (s.z > 0.85 && s.hue === 'a') {
        ctx.fillStyle = `rgba(123, 158, 255, ${a * 0.18})`;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);

  window.__atlas = window.__atlas || {};
  window.__atlas.setStarDensity = function (d) {
    density = Math.max(0.1, Math.min(2.5, d));
    seed();
  };
})();
