class StoryProgress {
  constructor(scenes, saved) {
    this.scenes=scenes; this.scene=0;this.beat=0;
    if(saved?.version===1&&Number.isInteger(saved.scene)&&saved.scene>=0&&saved.scene<scenes.length&&Number.isInteger(saved.beat)&&saved.beat>=0&&saved.beat<scenes[saved.scene].beats.length){this.scene=saved.scene;this.beat=saved.beat;}
  }
  get current(){return this.scenes[this.scene].beats[this.beat]}
  get end(){return this.scene===this.scenes.length-1&&this.beat===this.scenes[this.scene].beats.length-1}
  next(){if(this.end)return false;if(this.beat+1<this.scenes[this.scene].beats.length)this.beat++;else{this.scene++;this.beat=0}return true}
  previous(){if(this.beat>0)this.beat--;else if(this.scene>0){this.scene--;this.beat=this.scenes[this.scene].beats.length-1}else return false;return true}
  jump(scene){if(Number.isInteger(scene)&&scene>=0&&scene<this.scenes.length){this.scene=scene;this.beat=0;return true}return false}
  snapshot(){return {version:1,scene:this.scene,beat:this.beat}}
}
if(typeof module!=='undefined')module.exports=StoryProgress;
