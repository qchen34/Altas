/* global React, ReactDOM, useReveal, Hero, Slate, Scene, ChNaming, ChMoments, ChMarket, ChDefinition, ChWhyNow, ChUsers, ChProductMoments, ChBusiness, ChClosing, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSlider, TweakToggle, TweakColor */
const { useEffect, useState, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#7B9EFF",
  "fontScale": 100,
  "starDensity": 1,
  "showLetterbox": false,
  "showHud": true,
  "animStyle": "cinematic"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [chapter, setChapter] = useState({ id: '00', title: '开场' });
  const [progress, setProgress] = useState(0);
  const [tc, setTc] = useState('00:00:00:00');

  useReveal();

  // apply tweak vars
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', tweaks.accent);
    r.style.setProperty('--accent-soft', tweaks.accent + '2e');
    r.style.setProperty('--accent-glow', tweaks.accent + '8c');
    r.style.fontSize = `${tweaks.fontScale}%`;
    if (window.__atlas?.setStarDensity) window.__atlas.setStarDensity(tweaks.starDensity);
    document.body.classList.toggle('letterboxed', !!tweaks.showLetterbox);
    document.body.classList.toggle('no-hud', !tweaks.showHud);
  }, [tweaks]);

  // chapter detection + progress + timecode
  useEffect(() => {
    let raf;
    const update = () => {
      const all = document.querySelectorAll('[data-chapter]');
      const mid = window.innerHeight * 0.45;
      let active = null;
      all.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= 0) active = el;
      });
      if (active) {
        const id = active.getAttribute('data-chapter');
        const t = active.getAttribute('data-title');
        setChapter({ id, title: t });
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, max)));
      setProgress(p);
      // timecode like a film
      const total = 600; // 10 minutes virtual film
      const sec = p * total;
      const hh = Math.floor(sec / 3600);
      const mm = Math.floor((sec % 3600) / 60);
      const ss = Math.floor(sec % 60);
      const ff = Math.floor((sec - Math.floor(sec)) * 24);
      setTc(`${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}:${String(ff).padStart(2, '0')}`);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      {tweaks.showHud && (
        <div className="hud-top">
          <div className="left">
            <span className="hud-dot"></span>
            <span>REC · ATLAS</span>
          </div>
          <div className="right">
            <span>{tc}</span>
          </div>
        </div>
      )}

      <div className="stage">
        <Hero />
        <ChNaming />
        <ChMoments />
        <ChMarket />
        <ChDefinition />
        <ChWhyNow />
        <ChUsers />
        <ChProductMoments />
        <ChBusiness />
        <ChClosing />
      </div>

      <div className="subtitle-bar">
        <span className="ch-num">CH · {chapter.id}</span>
        <span className="ch-title">{chapter.title}</span>
      </div>
      <div className="progress-rail">
        <div className="progress-fill" style={{ width: `${progress * 100}%` }}></div>
      </div>

      {tweaks.showLetterbox && <>
        <div className="letterbox-top"></div>
        <div className="letterbox-bottom"></div>
      </>}

      <TweaksPanel title="Tweaks · ATLAS">
        <TweakSection label="VISUAL" />
        <TweakColor label="Accent" value={tweaks.accent}
          onChange={(v) => setTweak('accent', v)} />
        <TweakSlider label="Font scale" value={tweaks.fontScale}
          min={80} max={130} step={5} unit="%"
          onChange={(v) => setTweak('fontScale', v)} />
        <TweakSlider label="Star density" value={tweaks.starDensity}
          min={0.2} max={2.5} step={0.1}
          onChange={(v) => setTweak('starDensity', v)} />
        <TweakSection label="CINEMA" />
        <TweakToggle label="Letterbox bars" value={tweaks.showLetterbox}
          onChange={(v) => setTweak('showLetterbox', v)} />
        <TweakToggle label="Top HUD (timecode)" value={tweaks.showHud}
          onChange={(v) => setTweak('showHud', v)} />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
