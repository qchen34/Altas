/* global React */
const { useEffect, useRef, useState } = React;

/* ----- Reveal-on-scroll hook ----- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .fade-only, .blur-in, .typeon');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        } else if (e.boundingClientRect.top > window.innerHeight) {
          // only re-arm when element is below viewport (scrolling back up)
          e.target.classList.remove('in');
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ----- Scene wrapper ----- */
function Scene({ id, chapter, title, children, className = '' }) {
  return (
    <section
      id={id}
      data-chapter={chapter || ''}
      data-title={title || ''}
      data-screen-label={chapter ? `${chapter} ${title || ''}` : id}
      className={`scene ${className}`}
    >
      {children}
    </section>
  );
}

/* ----- Slate (chapter break) ----- */
function Slate({ id, chapter, chapterEn, title, en }) {
  return (
    <section
      id={id}
      data-chapter={chapter}
      data-title={title}
      data-screen-label={`${chapter} ${title}`}
      className="slate"
    >
      <div className="ch-id reveal">{chapter} · {chapterEn}</div>
      <h1 className="reveal" style={{ '--rd': '120ms' }}>{title}</h1>
      <div className="en reveal" style={{ '--rd': '320ms' }}>{en}</div>
    </section>
  );
}

/* ----- Hero countdown ----- */
function Hero() {
  const [count, setCount] = useState(3);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (count <= 0) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setCount(count - 1), 700);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <section
      id="s-hero"
      data-chapter="00"
      data-title="开场"
      data-screen-label="00 开场"
      className="scene scene-hero"
    >
      {!done ? (
        <div style={{ textAlign: 'center' }}>
          <div className="hero-mark fade-only in">A FILM BY JOSH</div>
          <div className="countdown" key={count}>{String(count).padStart(2, '0')}</div>
          <div className="mono" style={{ color: 'var(--fg-faint)' }}>// SYSTEM BOOT · 2026</div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div className="hero-tagline fade-only in">AI LAUNCHPAD</div>
          <h1 className="hero-title fade-only in" style={{ '--rd': '180ms' }}>云图</h1>
          <div className="hero-sub fade-only in" style={{ '--rd': '600ms' }}>ATLAS · A MAP OF THE AI WORLD</div>
          <div className="hero-quote fade-only in" style={{ '--rd': '1100ms' }}>
            <span>这不是融资 BP，是一份正在被绘制的项目蓝图。</span>
            <span className="en">A blueprint, in motion.</span>
          </div>
          <div className="hero-byline fade-only in" style={{ '--rd': '1500ms' }}>
            JOSH · 2026.04.26 · DRAFT v0.1
          </div>
          <div className="scroll-hint fade-only in" style={{ '--rd': '1800ms' }}>SCROLL</div>
        </div>
      )}
    </section>
  );
}

/* ----- Chapter 0: 名字的故事 ----- */
function ChNaming() {
  return (
    <>
      <Slate id="s-0-slate" chapter="CH · 00" chapterEn="ORIGIN" title="名字的故事" en="THE STORY OF A NAME" />
      <Scene id="s-0" chapter="CH · 00" title="名字的故事">
        <div className="eyebrow reveal">ATLAS · 三层重量</div>
        <h2 className="title-cn reveal" style={{ '--rd': '100ms' }}>三层重量，一个名字。</h2>
        <div className="body-cn">
          <p className="reveal" style={{ '--rd': '200ms' }}>
            云图的英文名是 <em>Atlas</em>。一个词，三层重量——
          </p>
          <p className="reveal" style={{ '--rd': '300ms' }}>
            <strong>地图集</strong>，把整个世界系统地铺展开来；<strong>希腊神话里肩扛苍穹的巨人</strong>，以一己之身托起世界；以及那部电影<strong>《云图》</strong>。
          </p>
        </div>

        <div className="quote reveal" style={{ '--rd': '400ms' }}>
          我们的生命从不只属于自己——每一次善意的举动，都会化作涟漪，穿越世界，穿越时间。
          <span className="en">"Our lives are not our own. By each act of kindness, we ripple across the world and through time."</span>
        </div>

        <div className="body-cn">
          <p className="reveal" style={{ '--rd': '200ms' }}>
            六段故事，跨越数个世纪。每一个看似微不足道的选择，都在远方某个陌生人身上掀起回响。最终，所有灵魂在同一张隐形的地图上彼此相认。
          </p>
          <p className="reveal" style={{ '--rd': '300ms' }}>
            而云图里——一个 indie 开发者周二深夜上线的小工具，周四被一个学品牌的大学生撞见，周日被投资人转进了 200 人的圈子。<em>三个从未谋面的人，因为同一张地图，命运开始交错。</em>
          </p>
          <p className="reveal" style={{ '--rd': '400ms' }}>
            云图不是工具目录。它是一张正在被绘制中的世界地图。
          </p>
          <p className="reveal" style={{ '--rd': '500ms' }}>
            地图从来不是凭空出现的——<em>它从第一个坐标，被一个人，画下第一笔。</em>
          </p>
        </div>
      </Scene>
    </>
  );
}

/* ----- Chapter 1: 缘起 / 三个真实的瞬间 ----- */
function ChMoments() {
  const moments = [
    {
      ts: 'T-002 · TUE 23:47',
      role: 'INDIE DEV',
      title: '一个 indie 开发者把 vibe coding 出来的小 demo 部署上线。',
      desc: '做完之后，完全不知道发到哪里能被人看到。发朋友圈太低效，发知乎被淹没，Product Hunt 看不懂中文，小红书被算法埋了。做出来了，但好像它从来没存在过。',
    },
    {
      ts: 'T-001 · THU 14:12',
      role: 'STUDENT · BRAND DESIGN',
      title: '一个学品牌设计的大学生，要在 24 小时内做出一组品牌样机交作业。',
      desc: '她知道现在有很多 AI 工具能帮她，但完全不知道哪一个最适合"品牌样机"这个具体场景——打开 Toolify 看到 800 个图像生成工具，还是无从下手。最后她翻出 Photoshop 自己做了一晚上。',
    },
    {
      ts: 'T-000 · SUN 09:03',
      role: 'INVESTOR',
      title: '一个做投资的人，每周都在打听"最近有什么新的 indie AI 产品值得看"。',
      desc: '想紧跟趋势。但能看到的信息源都是英文 Twitter 和 ProductHunt，没有一个中文媒介在做这件事。',
    },
  ];

  return (
    <>
      <Slate id="s-1-slate" chapter="CH · 01" chapterEn="GENESIS" title="三个真实的瞬间" en="THREE MOMENTS · COORDINATES OF A NEED" />
      <Scene id="s-1" chapter="CH · 01" title="三个真实的瞬间">
        <div className="eyebrow reveal">三个坐标，指向同一件事</div>
        <h2 className="title-cn reveal" style={{ '--rd': '100ms' }}>它真实存在，但没人在做。</h2>

        {moments.map((m, i) => (
          <div className="moment-card reveal" key={i} style={{ '--rd': `${i * 120}ms` }}>
            <div className="moment-head">
              <span className="timestamp">{m.ts}</span>
              <span className="role">{m.role}</span>
            </div>
            <h3>{m.title}</h3>
            <div className="body-cn"><p>{m.desc}</p></div>
          </div>
        ))}

        <div className="div-line">CONVERGENCE</div>

        <div className="def-card reveal">
          <div className="label">DEFINITION · 一句话</div>
          <div className="text">
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>云图</em>——给做产品的人一个被发现的地方，给找工具的人一个发现的入口，给追趋势的人一份可信任的导览。
          </div>
        </div>
      </Scene>
    </>
  );
}

/* ----- Chapter 2: 市场现状 ----- */
function ChMarket() {
  return (
    <>
      <Slate id="s-2-slate" chapter="CH · 02" chapterEn="LANDSCAPE" title="目录站很多，但没有发现平台。" en="DIRECTORIES EVERYWHERE, NO DISCOVERY" />
      <Scene id="s-2" chapter="CH · 02" title="市场现状">
        <div className="eyebrow reveal">现有玩家 · 28000 个工具，零判断</div>
        <div className="body-cn">
          <p className="reveal">
            中文 AI 工具站不少：AI 工具集、AI 导航网、Toolify 中文版、AMZ123…… 但它们都有一个共同问题——
          </p>
          <p className="reveal" style={{ '--rd': '160ms', fontSize: 22, lineHeight: 1.4 }}>
            <em>它们是"目录"，不是"发现平台"。</em>
          </p>
        </div>

        <div className="div-line reveal">DIRECTORY</div>

        <div className="body-cn">
          <p className="reveal">
            <strong>目录站</strong>——爬虫批量收录、SEO 流量逻辑、每个工具一段流水线介绍、没有编辑判断、没有真实使用场景、没有开发者对话。Toolify 中文版有 28000 多个工具，但<em>没有任何一个让你"看完想立刻试"</em>。
          </p>
        </div>

        <div className="div-line reveal">VS · DISCOVERY</div>

        <div className="body-cn">
          <p className="reveal">
            <strong>发现平台</strong>——有人格化的编辑判断、深度试用后的真实评测、按"你要解决什么问题"组织内容、能在站内直接试用、能和开发者直接对话、能积累信任。
          </p>
          <p className="reveal" style={{ '--rd': '160ms' }}>
            <em>云图想做的是后者。</em>就像早期豌豆荚之于 Google Play、早期少数派之于 App Store——不是替代，是在更前置的"发现"环节做事。
          </p>
        </div>
      </Scene>
    </>
  );
}

/* ----- Chapter 3: 云图是什么 ----- */
function ChDefinition() {
  const items = [
    { id: '01', name: '少数派的<em>内容深度</em>', desc: '精选 + 深度评测，有 taste。' },
    { id: '02', name: '豌豆荚的<em>发现体验</em>', desc: '场景化分类，普通人也能找到工具。' },
    { id: '03', name: 'ProductHunt 的<em>开发者关系</em>', desc: '开发者来这里发布、获取真实反馈、建立个人品牌。' },
    { id: '04', name: 'Steam 的<em>长期愿景</em>', desc: '终局是支付撮合 + AI 应用商城。' },
  ];
  return (
    <>
      <Slate id="s-3-slate" chapter="CH · 03" chapterEn="THESIS" title="云图是什么" en="ONE LINE · A NEW COMBINATION" />
      <Scene id="s-3" chapter="CH · 03" title="云图是什么">
        <div className="eyebrow reveal">一句话定义</div>
        <div className="def-card reveal" style={{ '--rd': '100ms' }}>
          <div className="label">DEFINITION</div>
          <div className="text">
            云图是一个为<em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>中文 AI 用户</em>提供"<em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>发现 + 试用 + 交流</em>"的平台，服务三类人——做产品的 indie 开发者、解决具体问题的普通用户、追踪趋势的高密度信息消费者。
          </div>
        </div>

        <div className="mono reveal" style={{ marginTop: 36, marginBottom: 12, '--rd': '120ms' }}>
          // FORM · 重新组合
        </div>
        <div className="reveal" style={{ '--rd': '180ms' }}>
          {items.map((it, i) => (
            <div className="compo-row" key={i}>
              <div className="id">{it.id}</div>
              <div>
                <div className="name" dangerouslySetInnerHTML={{ __html: it.name }} />
                <div className="desc">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="body-cn" style={{ marginTop: 24 }}>
          <p className="reveal">
            每一层都不是任意一个现有产品的复制，<em>它是这些精髓的重新组合。</em>
          </p>
        </div>
      </Scene>
    </>
  );
}

/* ----- Chapter 4: 为什么是现在 ----- */
function ChWhyNow() {
  const pillars = [
    {
      num: '01',
      name: 'Indie AI 开发者数量爆发',
      desc: 'AI 编程工具（Cursor、Claude Code、Lovable、Bolt）让一个人可以在一周内做出过去需要一个团队做的产品。Vibe coding 已经成为 indie 圈最热的标签——做产品从来没这么轻、这么快、这么爽过。',
    },
    {
      num: '02',
      name: '用户对 AI 工具的需求大众化',
      desc: '不再只是技术圈极客，普通办公室白领、设计专业学生、自由职业者、考研党都在主动找 AI 工具用。需求侧从来没有这么扩散过。',
    },
    {
      num: '03',
      name: '现有发现渠道全部失灵',
      desc: '微信公众号被算法压制、知乎信息密度低、小红书算法不友好、Twitter 翻墙门槛高、Product Hunt 全英文。两端都需要一个新的连接器，但没有一个在线产品在做这件事。',
    },
  ];

  return (
    <>
      <Slate id="s-4-slate" chapter="CH · 04" chapterEn="WINDOW" title="为什么是现在" en="A CLASSIC PLATFORM WINDOW · 2026" />
      <Scene id="s-4" chapter="CH · 04" title="为什么是现在">
        <div className="eyebrow reveal">三件事，同时发生</div>
        <h2 className="title-cn reveal" style={{ '--rd': '100ms' }}>窗口期不会永远开着。</h2>

        <div style={{ marginTop: 28 }}>
          {pillars.map((p, i) => (
            <div className="pillar reveal" key={i} style={{ '--rd': `${i * 140}ms` }}>
              <div className="num">{p.num}</div>
              <div>
                <div className="name">{p.name}</div>
                <div className="desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="body-cn" style={{ marginTop: 32 }}>
          <p className="reveal">
            <em>供给爆发 + 需求扩散 + 渠道失灵</em>——这是平台诞生的经典窗口期。
          </p>
        </div>
      </Scene>
    </>
  );
}

/* ----- Chapter 5: 三类用户 ----- */
function ChUsers() {
  const personas = [
    {
      tag: 'USER · A',
      role: 'SUPPLY-SIDE',
      name: 'Indie 开发者 / Vibe Coder',
      pivot: '没有他们，云图就是死的。',
      pains: [
        '做出来没人看，缺一个能被发现的展示场。',
        '想要一个能<em>快速试错、验证想法、敏捷迭代</em>的环境——把 demo 抛出去，最快速度看到真实用户怎么用、怎么评、卡在哪。',
        '想建立个人品牌，长期累积作品集。',
        '想知道用户为什么不付费，但单兵作战拿不到这种数据。',
        '长期想商业化，但不知道从哪开始。',
      ],
      values: [
        '一个能被<em>中文用户</em>搜到的展示页。',
        '<em>真实使用数据看板</em>（谁试了、试了多久、停在哪一步、留了什么反馈）。',
        '一键发布迭代版本（v1 / v2 / v3 持续累积）。',
        '中长期的支付撮合（让产品真正能赚钱）。',
        '一个能持续累积的"个人作品集"。',
      ],
    },
    {
      tag: 'USER · B',
      role: 'DEMAND-SIDE',
      name: '普通用户 / 解决具体问题的人',
      pivot: '没有他们，开发者来了也走。',
      pains: [
        '有非常具体的问题，但<em>不知道用哪个 AI 工具最合适</em>。',
        '不想从 28000 个工具里大海捞针。',
        '不想为试错付费、不想看技术评测。',
        '希望"3 分钟内决定要不要用"。',
      ],
      values: [
        '按"<em>你要解决什么具体问题</em>"找工具，不按功能分类。',
        '在站内<em>直接试用</em>（不用跳转、不用注册海外账号）。',
        '简单的"什么人该用、什么人别用"的判断。',
        '看到同样身份、同样场景的人的真实反馈。',
      ],
    },
    {
      tag: 'USER · C',
      role: 'AMPLIFIER',
      name: '高密度信息消费者',
      pivot: '没有他们，东西做得再好也没人转发。',
      pains: [
        '想紧跟趋势、不想被 SEO 垃圾内容浪费时间。',
        '想看到有判断力的精选。',
        '想找到投资 / 创业 / 学习机会。',
      ],
      values: [
        '每周精选邮件，有明确的"<em>为什么这个值得看</em>"。',
        '深度的产品分析、商业模式拆解、行业判断。',
        '一个能转发出去显得"<em>有 taste</em>"的信息源。',
      ],
    },
  ];

  return (
    <>
      <Slate id="s-5-slate" chapter="CH · 05" chapterEn="CAST" title="云图服务的三类人" en="THE CAST · SUPPLY · DEMAND · AMPLIFIER" />
      <Scene id="s-5" chapter="CH · 05" title="三类用户">
        <div className="eyebrow reveal">每一层，都有清晰的"为什么来"</div>

        {personas.map((p, i) => (
          <div className="persona" key={i}>
            <div className="persona-head reveal">
              <span className="tag">{p.tag}</span>
              <span className="role-label">{p.role}</span>
            </div>
            <h3 className="reveal" style={{ '--rd': '60ms' }}>{p.name}</h3>
            <div className="body-cn reveal" style={{ '--rd': '120ms' }}>
              <p style={{ color: 'var(--fg-dim)', fontStyle: 'italic', fontSize: 14 }}>{p.pivot}</p>
            </div>
            <div className="persona-section reveal" style={{ '--rd': '180ms' }}>
              <div className="ttl">PAIN POINTS</div>
              <ul className="persona-list">
                {p.pains.map((x, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: x }} />
                ))}
              </ul>
            </div>
            <div className="persona-section reveal" style={{ '--rd': '260ms' }}>
              <div className="ttl">WHAT WE OFFER</div>
              <ul className="persona-list">
                {p.values.map((x, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: x }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Scene>
    </>
  );
}

Object.assign(window, { useReveal, Scene, Slate, Hero, ChNaming, ChMoments, ChMarket, ChDefinition, ChWhyNow, ChUsers });
