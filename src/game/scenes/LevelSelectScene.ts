import Phaser from 'phaser';
import {COLORS,W} from '../config/constants';
import {SaveManager} from '../systems/SaveManager';
import {getLevel} from '../levels';
export class LevelSelectScene extends Phaser.Scene{
 private page=0;
 constructor(){super('LevelSelect')}
 init(data:{page?:number}){this.page=data.page??Math.floor((SaveManager.load().highestUnlockedLevel-1)/10)}
 create(){
  this.cameras.main.setBackgroundColor(COLORS.sky);
  this.add.text(W/2,36,'SCEGLI LIVELLO',{fontFamily:'Arial',fontSize:'26px',fontStyle:'bold',color:'#5148d9'}).setOrigin(.5);
  this.add.text(W/2,66,this.page===0?'MONDI 1–3':'MONDI 4–5',{fontFamily:'Arial',fontSize:'13px',fontStyle:'bold',color:'#60738c'}).setOrigin(.5);
  const save=SaveManager.load(),start=this.page*10+1;
  for(let slot=0;slot<10;slot++){
   const i=start+slot,level=getLevel(i),col=slot%2,row=Math.floor(slot/2),x=105+col*180,y=135+row*125,open=i<=save.highestUnlockedLevel;
   const palette=level.theme==='meadow'?[0xf2fff0,0x62b85c]:level.theme==='canyon'?[0xffe1bd,0xc86d3d]:level.theme==='storm'?[0xdce2ff,0x5966a8]:level.theme==='sky'?[0xe8fbff,0x58a9c4]:[0xffd4c7,0xc74635];
   const b=this.add.rectangle(x,y,145,96,open?palette[0]:0xb9c7d2).setStrokeStyle(3,open?palette[1]:0x91a0ac).setInteractive();
   this.add.text(x,y-25,open?String(i):'🔒',{fontFamily:'Arial',fontSize:'24px',fontStyle:'bold',color:open?'#253449':'#6d7a84'}).setOrigin(.5);
   this.add.text(x,y+1,`MONDO ${level.world} · ${level.difficulty}`,{fontFamily:'Arial',fontSize:'9px',fontStyle:'bold',color:'#60738c'}).setOrigin(.5);
   const stars=save.starsPerLevel[i]||0;this.add.text(x,y+28,'★'.repeat(stars)+'☆'.repeat(3-stars),{fontFamily:'Arial',fontSize:'17px',color:stars?'#f5ad27':'#7f8b95'}).setOrigin(.5);
   if(open)b.on('pointerdown',()=>this.scene.start('Game',{level:i}));
  }
  const home=this.add.text(20,796,'‹ HOME',{fontFamily:'Arial',fontSize:'18px',fontStyle:'bold',color:'#5148d9'}).setInteractive();home.on('pointerdown',()=>this.scene.start('Menu'));
  const pages=this.add.text(285,796,this.page===0?'AVANTI ›':'‹ INDIETRO',{fontFamily:'Arial',fontSize:'17px',fontStyle:'bold',color:'#5148d9'}).setInteractive();pages.on('pointerdown',()=>this.scene.restart({page:this.page===0?1:0}));
 }
}
