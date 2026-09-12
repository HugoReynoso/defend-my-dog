import Phaser from 'phaser';
export class Dog{
 body:MatterJS.BodyType; private g:Phaser.GameObjects.Graphics; state='idle';
 constructor(private scene:Phaser.Scene,x:number,y:number){this.body=scene.matter.add.circle(x,y,29,{friction:.8,restitution:.05,label:'dog'});this.g=scene.add.graphics().setDepth(5)}
 setState(s:string){this.state=s}
 update(){const{x,y}=this.body.position;this.g.clear();this.g.fillStyle(0xb96b3f).fillEllipse(x-19,y-21,25,43).fillEllipse(x+19,y-21,25,43);this.g.fillStyle(0xf5b65b).fillCircle(x,y,31);this.g.fillStyle(0xffffff).fillCircle(x-11,y-6,8).fillCircle(x+11,y-6,8);this.g.fillStyle(0x28313f).fillCircle(x-10,y-5,4).fillCircle(x+10,y-5,4).fillEllipse(x,y+7,12,9);this.g.lineStyle(3,0x56372b);if(this.state==='happy'||this.state==='celebrating')this.g.beginPath().arc(x,y+13,12,0,Math.PI).strokePath();else if(this.state==='scared')this.g.strokeCircle(x,y+17,6);else this.g.beginPath().moveTo(x-8,y+18).lineTo(x+8,y+18).strokePath()}
 destroy(){this.scene.matter.world.remove(this.body);this.g.destroy()}
}
