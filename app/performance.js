const STAGE_CUES={'01-02':{3:'tension'},'01-03':{4:'tension'},'02-05':{5:'tension'},'03-03':{1:'memory',3:'memory'},'04-08':{1:'jolt',2:'rush'},'04-09':{5:'memory'}};
function actorFor(speaker,art,sceneId){
 if(speaker==='布卢姆')return 'assets/bloom-morning-v1.png';
 if(speaker==='摩莉'&&art==='bedroom')return 'assets/molly-morning-v1.png';
 const old={'斯蒂芬':'stephen','迪希':'deasy','穆利根':'mulligan'};
 if(old[speaker])return '../网站/dist/assets/actor-'+old[speaker]+'.webp';
 if(speaker==='海恩斯')return 'assets/haines-v1.png';
 if(speaker==='萨金特')return 'assets/sargent-v1.png';
 if(['科克伦','阿姆斯特朗','学生们'].includes(speaker))return 'assets/pupils-v1.png';
 return null;
}
if(typeof module!=='undefined')module.exports={STAGE_CUES,actorFor};
