(() => {
const $=s=>document.querySelector(s),params=new URLSearchParams(location.search);
const opening=typeof OPENING_CHAPTERS==='undefined'?{}:OPENING_CHAPTERS;
const chapterNames={1:'塔楼的清晨',2:'教室、钱袋与一封信',3:'闭眼听见海岸',4:'布卢姆的早晨'};
const requested=Number(params.get('chapter')),chapter=[1,2,3,4].includes(requested)&&(requested===4||opening[requested])?requested:4;
const scenes=chapter===4?CHAPTER4:opening[chapter],key=`ulysses-chapter${chapter}-remake-v1`;
const sourceMap=chapter===4?SOURCE_MAP:SOURCE_OPENING;
$('#chapter-label').textContent=`第${chapter}章 · ${chapter<=3?'斯蒂芬':'布卢姆'} · ${chapter===4?'同日早晨重新开始':'清晨至上午'}`;
document.title=chapterNames[chapter]+' · 尤利西斯';
$('#fulltext').href='../网站/dist/index.html#chapter/'+chapter;
let saved=null;try{saved=JSON.parse(localStorage.getItem(key))}catch{}
const story=new StoryProgress(scenes,params.get('entry')==='next'?null:saved);const look=params.get('look');document.body.dataset.look=['1','2','3'].includes(look)?look:'1';
if(params.has('scene'))story.jump(Number(params.get('scene')));
const art={kitchen:'assets/kitchen-v1.png',bedroom:'assets/bedroom-v1.png',street:'../网站/dist/assets/archive/A022.webp',tower:'assets/tower-morning-v1.png',towerInterior:'assets/tower-breakfast-v1.png',school:'assets/school-morning-v1.png',office:'assets/deasy-office-v1.png',strand:'assets/strand-morning-v1.png'};
const artNames={kitchen:'厨房',bedroom:'卧室',tower:'炮塔屋顶',towerInterior:'炮塔内部',school:'教室',office:'校长工作室',strand:'海岸'};
let lastScene=-1,lastArt='',panelKind='';
function record(){try{localStorage.setItem(key,JSON.stringify(story.snapshot()));localStorage.setItem('ulysses-remake-last',JSON.stringify(chapter));$('#status').textContent='位置已保存'}catch{$('#status').textContent='此浏览器无法保存位置；请保持页面打开'}}
function draw(){const scene=scenes[story.scene],[speaker,text]=story.current;$('#voice').textContent=speaker;$('#text').textContent=text;$('#title').textContent=scene.title;$('#place').textContent=scene.place;$('#position').textContent=`第${story.scene+1}场 / ${scenes.length} · ${story.beat+1} / ${scene.beats.length}`;$('#previous').disabled=story.scene===0&&story.beat===0;$('#next').disabled=story.end;$('#next').textContent=story.beat===scene.beats.length-1?'下一场':'继续';$('#ending').hidden=!story.end;
const link=$('#next-chapter');link.href=chapter<4?`play.html?chapter=${chapter+1}&look=1&entry=next`:'../网站/dist/index.html#chapter/5';link.textContent=chapter<4?'进入第'+(chapter+1)+'章':'打开第五章阅读';$('#end-copy').textContent=chapter===3?'斯蒂芬的海岸暂告一段落。接下来回到同一日的早晨，进入布卢姆家中的厨房。':chapter===4?'这一段清晨结束了。接下来，继续阅读布卢姆在城中的一天。':chapter===1?'斯蒂芬离开塔楼，去学校上课。':'信和薪资留在口袋里。现在随斯蒂芬走到海岸。';
const currentArt=scene.id==='04-08'&&story.beat<2?'bedroom':scene.art;
if(story.scene!==lastScene||currentArt!==lastArt){document.body.classList.remove('arrival');const image=$('#painting');image.hidden=!art[currentArt];if(art[currentArt]){image.src=art[currentArt];image.alt=currentArt==='street'?'埃克尔斯街主题图，街头场景暂用':''+artNames[currentArt]+'油画演绎'}else{image.removeAttribute('src');image.alt=''}$('.neutral-art').hidden=Boolean(art[currentArt]);void image.offsetWidth;document.body.classList.add('arrival');lastScene=story.scene;lastArt=currentArt;}
const actor=$('#actor'),actorPath=actorFor(speaker,currentArt,scene.id);
actor.hidden=!actorPath;actor.className='actor '+(speaker==='摩莉'?'molly':'');if(actorPath){actor.src=actorPath;actor.alt=speaker+'正在说话 · AI艺术演绎'+(actorPath.includes('pupils')?'（课堂群像）':'')}else{actor.removeAttribute('src');actor.alt=''}
const stage=$('.stage');stage.dataset.cue='';void stage.offsetWidth;stage.dataset.cue=STAGE_CUES[scene.id]?.[story.beat]||'';
$('#world-map').href=`map.html?from=${chapter}&scene=${story.scene}`;$('#world-map').onclick=record;
$('#top-map').href=$('#world-map').href;$('#top-map').onclick=record;
$('.dialogue').dataset.layer=speaker.includes('心里')?'interior':speaker.includes('信中')?'letter':/回忆|想象|意识/.test(speaker)?'memory':'scene';
if(!$('#panel').hidden)renderPanel(panelKind);}
function change(action){if(action()){record();draw()}}
$('#next').onclick=()=>change(()=>story.next());$('#previous').onclick=()=>change(()=>story.previous());
function node(tag,text){const e=document.createElement(tag);e.textContent=text;return e}
function renderPanel(kind){panelKind=kind;const box=$('#panel-content');box.replaceChildren();$('#panel-title').textContent={scenes:'第'+chapter+'章场景',log:'已经走过的片段',source:'原文与改编'}[kind];
if(kind==='scenes'){box.className='scene-index';scenes.forEach((s,i)=>{const b=node('button',`${i+1}. ${s.title}`);if(i===story.scene)b.setAttribute('aria-current','step');b.onclick=()=>{story.jump(i);record();$('#panel').hidden=true;draw();$('#text').focus()};box.append(b)});const chapters=node('nav','');chapters.className='chapter-links';chapters.setAttribute('aria-label','章节');[1,2,3,4].forEach(n=>{const a=node('a',n+'. '+chapterNames[n]);a.href=`play.html?chapter=${n}&look=1`;if(n===chapter)a.setAttribute('aria-current','page');chapters.append(a)});box.append(chapters)}
else if(kind==='log'){box.className='';scenes.slice(0,story.scene+1).forEach((s,i)=>s.beats.slice(0,i===story.scene?story.beat+1:s.beats.length).forEach(([who,text])=>{const p=node('div','');p.className='log-row';p.append(node('small',s.title+' / '+who),node('p',text));box.append(p)}))}
else{box.className='';const s=scenes[story.scene],hit=sourceMap[s.id],startPage={1:29,2:65,3:88,4:118}[chapter];box.append(node('p','当前画面的文字经过压缩改编，不是逐句引文。以下是对应场景的原文定位片段。'),node('blockquote',hit.text),node('p',hit.page?'原PDF物理页：'+hit.page:'页内位置待复核；本章从原PDF第'+startPage+'页开始。'));box.append(node('p','本项目保留定位片段；原PDF未随公开仓库提供。'))}}
document.querySelectorAll('[data-panel]').forEach(b=>b.onclick=()=>{const isOpen=!$('#panel').hidden&&panelKind===b.dataset.panel;$('#panel').hidden=isOpen;b.setAttribute('aria-expanded',String(!isOpen));if(!isOpen){renderPanel(b.dataset.panel);$('#panel-title').scrollIntoView({block:'nearest',behavior:'auto'})}});
function closePanel(){$('#panel').hidden=true;document.querySelectorAll('[data-panel]').forEach(b=>b.setAttribute('aria-expanded','false'))}
$('#close').onclick=()=>{closePanel();document.querySelector(`[data-panel="${panelKind}"]`).focus()};
let reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;try{const v=JSON.parse(localStorage.getItem('ulysses-motion'));if(typeof v==='boolean')reduce=v}catch{}
function motion(){document.body.classList.toggle('reduced',reduce);$('#motion').setAttribute('aria-pressed',String(reduce));$('#motion').textContent=reduce?'动效已减少':'减少动效'}motion();$('#motion').onclick=()=>{reduce=!reduce;motion();try{localStorage.setItem('ulysses-motion',JSON.stringify(reduce))}catch{}};
document.addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key==='Escape')closePanel();if(e.key==='ArrowRight'){e.preventDefault();$('#next').click()}if(e.key==='ArrowLeft'){e.preventDefault();$('#previous').click()}});
draw();
})();
