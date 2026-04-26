/* global React */

/* ----- Chapter 6: 三个产品瞬间（电影画面） ----- */
function ChProductMoments() {
  return (
    <>
      <Slate id="s-6-slate" chapter="CH · 06" chapterEn="STILLS" title="三个产品瞬间" en="THREE STILLS · FROM THE FILM CALLED ATLAS" />
      <Scene id="s-6" chapter="CH · 06" title="三个产品瞬间">
        <div className="eyebrow reveal">画面就清晰了</div>

        {/* still 1 — dev dashboard */}
        <div className="still reveal">
          <div className="still-head">
            <span className="id">SCENE 01 · TUE 23:47</span>
            <span className="meta">INT · 开发者后台</span>
          </div>
          <div className="still-frame">
            <span className="frame-tag">[ DASHBOARD · v2 BUILDING ]</span>
            <div className="frame-dashboard">
              <div className="top">
                <span>// AI 简历优化器</span>
                <span className="ok">+42 USERS</span>
              </div>
              <div className="body">
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '70%' }}></div>
                <div className="bar" style={{ height: '55%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '65%' }}></div>
                <div className="bar" style={{ height: '80%' }}></div>
                <div className="bar" style={{ height: '50%' }}></div>
              </div>
            </div>
          </div>
          <h3>开发者小 X 周二晚上</h3>
          <p>
            刚把 vibe coding 出来的 AI 简历优化工具部署上线，发到云图。第二天早上他打开后台——<em>42 人试用过、8 人留下了文字反馈、3 人收藏</em>。其中一条说"如果能支持 PDF 直接上传就好了"——他立刻知道下一步该做什么。在这之前，他在朋友圈发了三天，<em>只有他妈点了赞</em>。当晚他迭代了一版 v2，继续放回云图，数据立刻有了对比。
          </p>
        </div>

        {/* still 2 — student search */}
        <div className="still reveal">
          <div className="still-head">
            <span className="id">SCENE 02 · THU 14:12</span>
            <span className="meta">EXT · 大学图书馆</span>
          </div>
          <div className="still-frame">
            <span className="frame-tag">[ SEARCH · BRAND MOCKUP ]</span>
            <div className="frame-search">
              <div className="input">品牌样机生成</div>
              <div className="result">
                <span>MOCKUP · STUDIO</span>
                <span className="cta">立即试用 →</span>
              </div>
              <div className="result">
                <span>23 个设计专业学生用过</span>
                <span className="cta">★★★★☆</span>
              </div>
            </div>
          </div>
          <h3>大学生小 Y 周四下午</h3>
          <p>
            明天要交一份品牌课作业，需要一组 logo 在 T 恤、咖啡杯、名片上的展示样机。她打开云图，搜"品牌样机生成"，<em>第一个结果是一个专门做 mockup 的 indie 工具，带"立即试用"按钮</em>，旁边还标着"被 23 个设计专业学生使用过"。她上传了 logo，30 秒后看到一组完整样机，直接导出。<em>省下了一晚上的 Photoshop 时间。</em>
          </p>
        </div>

        {/* still 3 — investor newsletter */}
        <div className="still reveal">
          <div className="still-head">
            <span className="id">SCENE 03 · SUN 09:03</span>
            <span className="meta">INT · 街角咖啡店</span>
          </div>
          <div className="still-frame">
            <span className="frame-tag">[ WEEKLY · 5 PICKS ]</span>
            <div className="frame-newsletter">
              <div className="nl-head">
                <span>本周 5 个值得看的 AI 产品</span>
                <span>W17 · 2026</span>
              </div>
              <div className="nl-row"><span><span className="num">01</span> · MOCKUP STUDIO</span><span>+312% WoW</span></div>
              <div className="nl-row"><span><span className="num">02</span> · DEEPSEARCH CN</span><span>+184% WoW</span></div>
              <div className="nl-row"><span><span className="num">03</span> · RESUME AI v2</span><span>+ 96% WoW</span></div>
              <div className="nl-row"><span><span className="num">04</span> · NOTE FORGE</span><span>+ 71% WoW</span></div>
              <div className="nl-row"><span><span className="num">05</span> · VOICE LAB</span><span>+ 44% WoW</span></div>
            </div>
          </div>
          <h3>投资人小 L 周日早上</h3>
          <p>
            咖啡店打开邮箱，看到云图发的"本周 5 个值得看的 AI 产品"——每个都附<em>核心数据 + 编辑的两句话点评</em>。他看完转发到一个 200 人的投资群，说"<em>这是每周必看的</em>"。
          </p>
        </div>

        <div className="quote reveal">
          这三个瞬间就是云图的灵魂。任何一个现有平台都做不出这三个瞬间。
          <span className="en">"THE SOUL OF ATLAS LIVES IN THESE THREE FRAMES."</span>
        </div>
      </Scene>
    </>
  );
}

/* ----- Chapter 7: 商业模式 ----- */
function ChBusiness() {
  const phases = [
    {
      id: 'PHASE 0',
      time: 'M0 — M12',
      title: '养活自己',
      line: '主要收入：<em>渠道分销返佣</em>。和现有 AI API 中转站合作，在云图合适位置推荐他们的服务，拿 10–30% 返佣。',
      meta: 'MRR · ¥3K — ¥10K · 够养服务器',
    },
    {
      id: 'PHASE 1',
      time: 'M12 — M24',
      title: '验证商业可行性',
      line: '主要：<em>开发者侧付费推广</em>（首发推广 $299–999，做深度评测 + 首页 + 真实试用反馈）。辅助：<em>Pro 用户订阅</em>（¥39/月 或 ¥299/年）。',
      meta: 'MRR · $5K — $15K · 5–10 万月活',
    },
    {
      id: 'PHASE 2',
      time: 'M24 — M36',
      title: '做支付撮合',
      line: '<em>真正的商业护城河</em>。给开发者提供"集成 SDK 一行代码搞定支付"，抽 10–15% 撮合费。比 Stripe 重，比 App Store 轻。',
      meta: 'GMV · $100K — $1M / mo · 平台分成 $10K — $100K',
    },
    {
      id: 'PHASE 3',
      time: 'M36+',
      title: 'AI 时代的中文 App Store',
      line: '内嵌试用 + 国内合规副本 + 完整支付通道 + 开发者后台 + 用户钱包。<em>这是最后一步，不是第一步。</em>',
      meta: '融资 · 团队 · 合规升级',
    },
  ];

  return (
    <>
      <Slate id="s-7-slate" chapter="CH · 07" chapterEn="ARC" title="商业模式：从轻到重" en="A FOUR-ACT REVENUE ARC" />
      <Scene id="s-7" chapter="CH · 07" title="商业模式">
        <div className="eyebrow reveal">不会第一天就变现，但路径已经清楚</div>

        <div style={{ marginTop: 24 }}>
          {phases.map((ph, i) => (
            <div className="phase reveal" key={i} style={{ '--rd': `${i * 100}ms` }}>
              <div className="ph-head">
                <span className="ph-id">{ph.id}</span>
                <span className="ph-time">{ph.time}</span>
              </div>
              <h3>{ph.title}</h3>
              <div className="ph-line" dangerouslySetInnerHTML={{ __html: ph.line }} />
              <div className="ph-meta">
                <span>// </span>{ph.meta}
              </div>
            </div>
          ))}
        </div>

        <div className="body-cn" style={{ marginTop: 28 }}>
          <p className="reveal">
            第一步是做好"<em>发现 + 评测 + 社区</em>"这件最朴素的事。
          </p>
        </div>
      </Scene>
    </>
  );
}

/* ----- Chapter 8: Atlas 地图 / 结尾 ----- */
function AtlasMap() {
  const ref = React.useRef(null);
  const inView = React.useRef(false);

  React.useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function size() {
      const rect = cvs.getBoundingClientRect();
      cvs.width = rect.width * dpr;
      cvs.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();

    const W = () => cvs.getBoundingClientRect().width;
    const H = () => cvs.getBoundingClientRect().height;

    // generate point cloud arranged into "atlas map" silhouette (a circle with constellation lines)
    const N = 90;
    const points = [];
    for (let i = 0; i < N; i++) {
      const angle = (i / N) * Math.PI * 2;
      const radius = 0.32 + Math.random() * 0.08;
      // perturb to look organic
      const cx = 0.5 + Math.cos(angle) * radius + (Math.random() - 0.5) * 0.04;
      const cy = 0.5 + Math.sin(angle) * radius + (Math.random() - 0.5) * 0.04;
      // start from random scattered position
      points.push({
        sx: Math.random(),
        sy: Math.random(),
        tx: cx,
        ty: cy,
        x: Math.random(),
        y: Math.random(),
        delay: Math.random() * 0.5,
        connected: false,
      });
    }
    // add a few inner points to fill the constellation
    for (let i = 0; i < 24; i++) {
      const r = Math.random() * 0.28;
      const a = Math.random() * Math.PI * 2;
      points.push({
        sx: Math.random(),
        sy: Math.random(),
        tx: 0.5 + Math.cos(a) * r,
        ty: 0.5 + Math.sin(a) * r,
        x: Math.random(),
        y: Math.random(),
        delay: 0.2 + Math.random() * 0.6,
      });
    }

    let progress = 0;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { inView.current = e.isIntersecting; });
    }, { threshold: 0.3 });
    io.observe(cvs);

    function ease(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

    function draw() {
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);

      if (inView.current) progress = Math.min(1, progress + 0.005);

      // draw outer ring (compass)
      ctx.strokeStyle = 'rgba(123, 158, 255, 0.18)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.32, 0, Math.PI * 2);
      ctx.stroke();

      // crosshairs
      ctx.strokeStyle = 'rgba(123, 158, 255, 0.12)';
      ctx.beginPath();
      ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
      ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
      ctx.stroke();

      // points: lerp from scattered to target
      points.forEach(p => {
        const local = Math.max(0, Math.min(1, (progress - p.delay) / (1 - p.delay)));
        const t = ease(local);
        p.x = p.sx + (p.tx - p.sx) * t;
        p.y = p.sy + (p.ty - p.sy) * t;
      });

      // draw connecting lines once mostly converged
      if (progress > 0.6) {
        const conn = Math.min(1, (progress - 0.6) / 0.4);
        ctx.strokeStyle = `rgba(123, 158, 255, ${0.18 * conn})`;
        ctx.lineWidth = 0.6;
        // connect points within proximity
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const a = points[i], b = points[j];
            const dx = (a.x - b.x) * w, dy = (a.y - b.y) * h;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 50) {
              ctx.beginPath();
              ctx.moveTo(a.x * w, a.y * h);
              ctx.lineTo(b.x * w, b.y * h);
              ctx.stroke();
            }
          }
        }
      }

      // points
      points.forEach((p, i) => {
        const local = Math.max(0, Math.min(1, (progress - p.delay) / (1 - p.delay)));
        const r = 1.2 + local * 1.0;
        const a = 0.4 + local * 0.5;
        ctx.fillStyle = `rgba(123, 158, 255, ${a})`;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, r, 0, Math.PI * 2);
        ctx.fill();
        if (local > 0.9 && i % 4 === 0) {
          ctx.fillStyle = `rgba(123, 158, 255, 0.12)`;
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // center mark
      if (progress > 0.85) {
        const a = (progress - 0.85) / 0.15;
        ctx.fillStyle = `rgba(244, 245, 251, ${a})`;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(123, 158, 255, ${a * 0.6})`;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', size);
    return () => {
      window.removeEventListener('resize', size);
      io.disconnect();
    };
  }, []);

  return (
    <div className="atlas-canvas-wrap reveal">
      <div className="atlas-label-tl">N · 41.0°</div>
      <div className="atlas-label-tr">FIRST COORDINATE</div>
      <div className="atlas-label-bl">JOSH · 2026</div>
      <div className="atlas-label-br">E · 116.0°</div>
      <canvas ref={ref}></canvas>
    </div>
  );
}

function CtaCard() {
  const [copied, setCopied] = React.useState(false);
  const handle = 'Kindajoshua2020';

  const onCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(handle);
      } else {
        const ta = document.createElement('textarea');
        ta.value = handle;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <div className="cta-card reveal" style={{ '--rd': '240ms' }}>
      <div className="label">JOIN · FELLOW TRAVELERS</div>
      <div className="handle">
        <span>{handle}</span>
        <button
          type="button"
          className={`copy-btn${copied ? ' copied' : ''}`}
          onClick={onCopy}
          aria-label="复制微信号"
        >
          {copied ? '✓ COPIED' : '⧉ COPY'}
        </button>
      </div>
      <div className="hint">
        微信加我聊聊。云图现在是单兵作战，需要更多同路人——indie 开发者、AI 重度用户、内容创作者、早期投资人，都欢迎。
      </div>
    </div>
  );
}

function ChClosing() {
  return (
    <>
      <Slate id="s-8-slate" chapter="CH · 08" chapterEn="FIN" title="一张地图，从第一个坐标开始画。" en="THE FIRST COORDINATE · BEGIN" />
      <Scene id="s-8" chapter="CH · 08" title="结尾" className="scene-closing">
        <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>FIN</div>

        <div className="body-cn reveal" style={{ '--rd': '100ms' }}>
          <p>中国互联网创业失败率是 95% 以上，内容平台尤其难做。但有几件事是确定的——</p>
        </div>

        <div className="div-line reveal">CERTAINTIES</div>

        <div className="body-cn" style={{ textAlign: 'left' }}>
          <p className="reveal">
            <strong>痛点是真实的。</strong>indie 开发者做出来没人看，不是个别现象，是结构性困境。这两个痛点不会自动消失。
          </p>
          <p className="reveal" style={{ '--rd': '120ms' }}>
            <strong>窗口期是真实的。</strong>Vibe coding 让供给爆发，AI 需求大众化让需求扩散，中间的连接器还没人做好。
          </p>
          <p className="reveal" style={{ '--rd': '240ms' }}>
            <strong>切入点是真实的。</strong>不是要颠覆任何人，只是在"发现"这个最前置的环节，做一件别人没做好的事。
          </p>
        </div>

        <AtlasMap />

        <div className="atlas-center-text reveal">
          <div className="en">A · MAP · OF · THE · AI · WORLD</div>
          <div className="cn">一张地图，从第一个坐标开始画。</div>
        </div>

        <div className="closing-quote reveal" style={{ '--rd': '120ms' }}>
          <em>能开始的最好时机，就是现在。</em>
        </div>

        <div className="closing-en reveal" style={{ '--rd': '180ms' }}>
          "THE BEST TIME TO BEGIN — IS NOW."
        </div>

        <CtaCard />

        <div className="colophon reveal" style={{ '--rd': '320ms' }}>
          云图 · YUNTU<span className="sep">·</span>JOSH<span className="sep">·</span>2026.04.26
          <br />
          DRAFT v0.1<span className="sep">·</span>A BLUEPRINT IN MOTION
        </div>
      </Scene>
    </>
  );
}

Object.assign(window, { ChProductMoments, ChBusiness, ChClosing, AtlasMap, CtaCard });
