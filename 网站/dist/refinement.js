/* Shared reading/game controls; the novel and game keep separate progress. */
(() => {
  const app = document.querySelector('#app');
  const motion = document.querySelector('#motion');
  const preference = 'ulysses-motion';
  const stored = key => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const savedMotion = stored(preference);
  const reduce = typeof savedMotion === 'boolean' ? savedMotion : window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const setMotion = value => {
    document.body.classList.toggle('reduced', value);
    motion.setAttribute('aria-pressed', String(value));
    motion.textContent = value ? '动效已减少' : '减少动效';
  };
  setMotion(reduce);
  motion.onclick = () => {
    const value = !document.body.classList.contains('reduced');
    setMotion(value);
    try { localStorage.setItem(preference, JSON.stringify(value)); } catch { toast('本次设置已生效，浏览器未允许保存'); }
  };
  document.body.insertAdjacentHTML('afterbegin', '<a class="skip-link" href="#app">跳到主要内容</a>');
  app.setAttribute('tabindex', '-1');
  document.querySelector('.skip-link').onclick = event => { event.preventDefault(); app.focus(); };
  if (document.body.classList.contains('game')) {
    document.querySelector('nav').setAttribute('aria-label', '游戏导航');
    if (new URLSearchParams(location.search).get('resume') === '1') document.querySelector('#resume').click();
    return;
  }
  function update() {
    const route = location.hash.slice(1) || 'home';
    document.querySelectorAll('header nav a').forEach(link => {
      const target = link.getAttribute('href');
      const selected = target === '#' + route || (target === '#book' && /^(chapter\/|front$|appendix$)/.test(route)) || (target === '#archive' && /^(archive\/|entry\/)/.test(route));
      if (selected) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
    if (route.startsWith('chapter/')) {
      try { localStorage.setItem('ulysses-last-reading', JSON.stringify(Number(route.split('/')[1]))); } catch {}
    }
    if (route !== 'home' || document.querySelector('.entry-guide')) return;
    const game = stored('ulysses-v2-game');
    const hasGame = game?.version === 2 && Number.isInteger(game.n) && game.n >= 1 && game.n <= 18 && Number.isInteger(game.at) && game.at >= 0 && game.at < 8;
    const chapter = stored('ulysses-last-reading');
    const hasReading = Number.isInteger(chapter) && chapter >= 1 && chapter <= 18;
    document.querySelector('.hero').insertAdjacentHTML('afterend', `<section class="wrap entry-guide" aria-label="选择阅读方式"><div><h2>从哪里走进都柏林？</h2><p class="muted">想先认识故事，就从游戏的海边清晨开始；遇见不熟悉的人，再翻开他的档案。</p></div><div class="entry-paths"><a href="game.html${hasGame ? '?resume=1' : ''}"><strong>${hasGame ? '继续第' + game.n + '幕' : '跟随人物走一天'}</strong><span>切换斯蒂芬、布卢姆与摩莉的视角，在十八幕中观察、交谈与记录。</span></a><a href="${hasReading ? '#chapter/' + chapter : '#book'}"><strong>${hasReading ? '回到第' + chapter + '章' : '翻开小说'}</strong><span>按章节阅读译文，随时核对原PDF；章内位置由“保存位置”记录。</span></a><a href="#archive"><strong>认识城里的人与地方</strong><span>查看人物、街道、群体和物件的介绍、插图及关联章节。</span></a></div></section>`);
  }
  window.addEventListener('hashchange', update);
  update();
})();
