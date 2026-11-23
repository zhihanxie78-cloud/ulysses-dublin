(() => {
try{
 const chapter=JSON.parse(localStorage.getItem('ulysses-remake-last'));
 const saved=JSON.parse(localStorage.getItem(`ulysses-chapter${chapter}-remake-v1`));
 if([1,2,3,4].includes(chapter)&&saved?.version===1&&Number.isInteger(saved.scene)&&saved.scene>=0&&Number.isInteger(saved.beat)&&saved.beat>=0){const a=document.querySelector('#continue');a.href='play.html?chapter='+chapter+'&look=1';a.textContent='继续第'+chapter+'章';a.hidden=false;}
}catch{}
})();
