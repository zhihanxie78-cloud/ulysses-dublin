const MAP_CHAPTERS=[
{n:1,name:'塔楼的清晨',place:'桑迪科夫炮塔',en:'Sandycove Martello Tower',x:1330,y:825,short:'塔楼',who:'斯蒂芬、穆利根、海恩斯',text:'从剃须与早餐开始。玩笑牵出母亲的记忆与寄居的不适；离开海边时，斯蒂芬留下钥匙。',query:'James Joyce Tower Sandycove'},
{n:2,name:'教室、钱袋与一封信',place:'达尔基的学校',en:'Dalkey · Summerfield House',x:1305,y:585,short:'学校',who:'斯蒂芬、萨金特、迪希',text:'上课，帮助留下的孩子，领到薪资。校长托付的一封信，将这段上午与后来报馆的情节连接。',query:'Summerfield House Dalkey Avenue'},
{n:3,name:'闭眼听见海岸',place:'桑迪芒特海滩',en:'Sandymount Strand',x:1285,y:255,short:'海岸独行',who:'斯蒂芬',text:'脚步沿沙滩前行，念头走向家庭、巴黎与过去。所见、回忆与写下的诗句，构成一段意识中的行走。',query:'Sandymount Strand Dublin'},
{n:4,name:'厨房里的一只猫',place:'埃克尔斯街7号',en:'7 Eccles Street',x:380,y:160,short:'早餐',who:'布卢姆、摩莉',text:'给猫喂食，买腰子，给摩莉送茶。来信、早餐与糊锅的日常，让家庭生活和未说出的心事同时显现。',query:'7 Eccles Street Dublin'},
{n:5,name:'邮局、教堂与肥皂',place:'斯威尼药房及周边',en:"Sweny's · Lincoln Place",x:905,y:625,short:'邮局与药房',who:'布卢姆、麦科伊、巴托恩',text:'布卢姆领出寄给亨利·弗劳尔的私人来信，在街头与人交谈，走进宗教空间，再到药房买肥皂。本章有多个地点。',query:"Sweny's Pharmacy Dublin"},
{n:6,name:'送葬的路上',place:'格拉斯内文墓地',en:'Glasnevin Cemetery · 郊外分区',x:150,y:155,short:'送葬',who:'布卢姆与送葬者',text:'从马车交谈到墓地仪式，眼前的葬礼引出布卢姆关于父亲、鲁迪和死亡的念头。墓地位于市中心以外。',query:'Glasnevin Cemetery Dublin'},
{n:7,name:'报馆里的两条事务线',place:'自由人报馆一带',en:"Freeman's Journal · Prince's Street",x:660,y:320,short:'报馆',who:'布卢姆、斯蒂芬、报馆众人',text:'布卢姆为广告奔走，斯蒂芬带来校长的信。报馆的标题、言谈和工作交错，两位人物尚未结成同行的伙伴。',query:'Princes Street North Dublin'},
{n:8,name:'饥饿中的城市',place:'戴维·伯恩酒馆',en:"Davy Byrne's · Duke Street",x:575,y:690,short:'午餐',who:'布卢姆与街头相遇者',text:'饥饿带着布卢姆穿过街道。他离开令自己不适的餐馆，在戴维·伯恩吃东西；日常进食牵出往事与回避。',query:"Davy Byrnes Duke Street Dublin"},
{n:9,name:'图书馆里的论辩',place:'爱尔兰国家图书馆',en:'National Library · Kildare Street',x:760,y:760,short:'图书馆',who:'斯蒂芬、穆利根与听者',text:'斯蒂芬提出自己的莎士比亚论点，听者回应、质疑。父子与家庭的议题在公开辩论和私人感受之间来回。',query:'National Library of Ireland Kildare Street'},
{n:10,name:'同一时刻的城市',place:'城市群像 · 多地',en:'Wandering Rocks · 多地点入口',x:660,y:225,short:'城市群像',who:'十九组片段中的市民与来往者',text:'镜头在城市的不同生活之间切换。这个章号代表分散片段的入口，不能看成主角在一处完成的任务。',query:null},
{n:11,name:'歌声与车声',place:'奥蒙德旅馆',en:'Ormond Hotel · Ormond Quay',x:440,y:423,short:'歌声',who:'布卢姆、博伊兰与旅馆众人',text:'旅馆内外的音乐、交谈与车声交错。博伊兰的出入与布卢姆的心事相互映照，听见的声音牵动着个人生活。',query:'Ormond Quay Upper Dublin'},
{n:12,name:'争执升级',place:'小不列颠街酒馆',en:'Little Britain Street',x:285,y:340,short:'酒馆争执',who:'布卢姆、市民与匿名叙述者',text:'酒馆里的身份与归属之争逐步升级。猜疑、回应和敌意推动离场；夸饰与偏见属于叙述者，不是中立的事实。',query:'Little Britain Street Dublin'},
{n:13,name:'烟火下的海滩',place:'再次来到桑迪芒特',en:'Sandymount Strand · 叙述重返',x:1405,y:295,short:'傍晚海滩',who:'格蒂、友人与孩子；布卢姆',text:'海边的浪漫化叙述、烟火与离去之后，视角转向布卢姆的判断。两种声音保留各自的欲望与局限。',query:'Sandymount Strand Dublin'},
{n:14,name:'门里仍有人在生产',place:'霍尔斯街产院',en:'Holles Street Maternity Hospital',x:1030,y:785,short:'产院',who:'布卢姆、斯蒂芬、护士与医学生',text:'生产、照料、饮酒和谈话并行，语言随着现场变化。门内的分娩与众人的公共言谈，共同通向后续夜行。',query:'Holles Street Dublin'},
{n:15,name:'夜城',place:'蒙托街区',en:'Monto · Railway Street',x:970,y:280,short:'夜城',who:'布卢姆、斯蒂芬、贝拉与众多幻象',text:'现实往来与羞惧、欲望、母亲的幻象交织。吊灯破碎后仍有费用与冲突的现实后果；布卢姆开始照料倒下的斯蒂芬。',query:'Railway Street Dublin'},
{n:16,name:'疲惫中的暂歇',place:'车夫棚一带',en:"Cabman's Shelter · Butt Bridge",x:905,y:420,short:'车夫棚',who:'布卢姆、斯蒂芬、水手',text:'两人同行来到车夫棚，吃喝、听水手谈往事。布卢姆试着靠近，斯蒂芬仍有距离；短暂休息之后再向家走去。',query:'Butt Bridge Dublin'},
{n:17,name:'归家与可可',place:'回到埃克尔斯街7号',en:'7 Eccles Street · 叙述重返',x:450,y:160,short:'归家',who:'布卢姆、斯蒂芬',text:'进屋、生火、喝可可。相近与差异并存，邀请没有换来留宿；斯蒂芬离开后，布卢姆的家中生活与思绪仍继续。',query:'7 Eccles Street Dublin'},
{n:18,name:'她继续说下去',place:'埃克尔斯街的卧室',en:'7 Eccles Street · Molly',x:520,y:160,short:'独白',who:'摩莉',text:'在醒着的身体与夜晚之间，摩莉的念头游移于婚姻、欲望、女儿和往事。最后的答应来自持续的意识运动，并非一道婚姻问题的标准答案。',query:'7 Eccles Street Dublin'}
];
const ns='http://www.w3.org/2000/svg',nodeGroup=document.querySelector('#nodes'),pins=[];
const get=s=>document.querySelector(s);
function make(tag,text){const e=document.createElement(tag);if(text)e.textContent=text;return e}
MAP_CHAPTERS.forEach(d=>{
 const g=document.createElementNS(ns,'g'),a=document.createElementNS(ns,'a');
 g.setAttribute('class','map-node'+(d.n>4?' old':''));
 g.setAttribute('transform','translate('+d.x+' '+d.y+')');
 a.setAttribute('href','#detail');a.setAttribute('aria-controls','detail');a.setAttribute('aria-label',d.n+' '+d.short+'，'+(d.n<=4?'连续剧情':'章节选段'));
 const hit=document.createElementNS(ns,'circle');hit.setAttribute('r','34');hit.setAttribute('class','pin-hit');a.append(hit);
 const circle=document.createElementNS(ns,'circle');circle.setAttribute('r','22');a.append(circle);
 const t=document.createElementNS(ns,'text');t.setAttribute('y','8');t.setAttribute('class','number');t.textContent=String(d.n).padStart(2,'0');a.append(t);
 if(![4,17,18].includes(d.n)){const label=document.createElementNS(ns,'text');label.setAttribute('y','55');label.setAttribute('class','pin-label');label.textContent=d.short;a.append(label)}
 a.onclick=e=>{e.preventDefault();show(d.n);get('#detail').focus({preventScroll:!matchMedia('(max-width:750px)').matches})};g.append(a);nodeGroup.append(g);pins.push(a);
 const option=make('option',String(d.n).padStart(2,'0')+' · '+d.place);option.value=d.n;get('#chapter-select').append(option);
});
function show(n){
 const d=MAP_CHAPTERS[n-1],box=get('#detail');if(!d)return;box.replaceChildren();box.tabIndex=-1;
 pins.forEach((p,i)=>{p.setAttribute('aria-current',i===n-1?'location':'false');p.parentNode?.classList.toggle('selected',i===n-1)});
 get('#chapter-select').value=String(n);
 const img=make('img');img.className='place-art';img.src=n===1?'assets/tower-morning-v1.png':n===2?'assets/school-morning-v1.png':n===3?'assets/strand-morning-v1.png':n===4?'assets/kitchen-v1.png':'../网站/dist/assets/scene-'+String(n).padStart(2,'0')+'.webp';img.alt=d.place+' · AI艺术演绎';box.append(img);
 const body=make('div');body.className='place-detail';box.append(body);
 const tag=make('p','第'+n+'章 / '+(n<=4?'连续剧情':'章节选段'));tag.className='chapter-status';body.append(tag,make('h2',d.place));const en=make('p',d.en);en.className='place-en';body.append(en,make('h3',d.name),make('p',d.text));const people=make('p','人物：'+d.who);people.className='people';body.append(people);
 const link=(text,href,cls)=>{const a=make('a',text);a.href=href;if(cls)a.className=cls;body.append(a);return a};
 if(n<=4){link('继续本章','play.html?chapter='+n+'&look=1','enter-chapter');const scenes=n===4?CHAPTER4:OPENING_CHAPTERS[n];const heading=make('h3','直接进入场景');heading.className='scene-heading';body.append(heading);scenes.forEach((s,i)=>link(String(i+1).padStart(2,'0')+'  '+s.title,'play.html?chapter='+n+'&scene='+i+'&look=1','scene-link'))}
 else{const p=make('p','这里提供本章的选段体验；完整情节可继续阅读原章。');p.className='coverage-note';body.append(p);link('进入章节选段','../网站/dist/game.html?chapter='+n,'enter-chapter')}
 link('阅读原章','../网站/dist/index.html#chapter/'+n,'read-link');
 if(d.query){const a=link('在当代地图查看地点','https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(d.query),'real-map');a.target='_blank';a.rel='noopener';}
}
get('#chapter-select').onchange=e=>{show(Number(e.target.value));if(matchMedia('(max-width:750px)').matches)get('#detail').focus()};
let zoom=1;function setZoom(v){zoom=Math.max(1,Math.min(2.5,v));get('#map-canvas').style.width=(zoom*100)+'%';get('#map-canvas').style.setProperty('--map-zoom',zoom);get('#zoom-reset').textContent=Math.round(zoom*100)+'%';get('#zoom-out').disabled=zoom===1;get('#zoom-in').disabled=zoom===2.5;if(zoom===1){get('#map-viewport').scrollLeft=0;get('#map-viewport').scrollTop=0}}
get('#zoom-in').onclick=()=>setZoom(zoom+.25);get('#zoom-out').onclick=()=>setZoom(zoom-.25);get('#zoom-reset').onclick=()=>setZoom(1);setZoom(1);
const query=new URLSearchParams(location.search),from=Number(query.get('from'));
if(Number.isInteger(from)&&from>=1&&from<=4){get('#return').href='play.html?chapter='+from+'&look=1';get('#return').textContent='回到当前场景';show(from)}else show(1);
