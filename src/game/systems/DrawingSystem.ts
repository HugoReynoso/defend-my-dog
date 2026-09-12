import Phaser from 'phaser';
type P={x:number;y:number};
export class DrawingSystem{
 private points:P[]=[];private drawing=false;private locked=false;private g:Phaser.GameObjects.Graphics;used=0;onRelease?:()=>void;
 constructor(private scene:Phaser.Scene,public maxInk:number,private solids:Phaser.Geom.Rectangle[]){this.g=scene.add.graphics().setDepth(8);scene.input.on('pointerdown',(p:Phaser.Input.Pointer)=>this.start(p));scene.input.on('pointermove',(p:Phaser.Input.Pointer)=>this.move(p));scene.input.on('pointerup',()=>this.finish())}
 private valid(x:number,y:number){return x>8&&x<382&&y>88&&y<790&&!this.solids.some(r=>Phaser.Geom.Rectangle.Contains(r,x,y))}
 private start(p:Phaser.Input.Pointer){if(this.locked||!this.valid(p.x,p.y))return;this.drawing=true;this.points=[{x:p.x,y:p.y}];this.used=0}
 private move(p:Phaser.Input.Pointer){if(!this.drawing)return;const q=this.points.at(-1)!;const dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);if(d<9)return;if(this.used+d>this.maxInk||!this.valid(p.x,p.y)){if(this.used+d>this.maxInk)this.finish();return}this.points.push({x:p.x,y:p.y});this.used+=d;this.render()}
 private render(){this.g.clear().lineStyle(11,0x5148d9,1).beginPath().moveTo(this.points[0].x,this.points[0].y);for(let i=1;i<this.points.length;i++){const a=this.points[i-1],b=this.points[i];this.g.lineTo((a.x+b.x)/2,(a.y+b.y)/2)}this.g.lineTo(this.points.at(-1)!.x,this.points.at(-1)!.y).strokePath();this.g.lineStyle(3,0x8e87ff,.9).strokePath()}
 private finish(){if(!this.drawing)return;this.drawing=false;if(this.points.length<2){this.points=[];this.g.clear();return}this.locked=true;const bodies:MatterJS.BodyType[]=[];for(let i=1;i<this.points.length;i++){const a=this.points[i-1],b=this.points[i],len=Math.hypot(b.x-a.x,b.y-a.y),ang=Math.atan2(b.y-a.y,b.x-a.x);const body=this.scene.matter.add.rectangle((a.x+b.x)/2,(a.y+b.y)/2,len+5,11,{angle:ang,label:'shield',friction:.9,restitution:.08,density:.004,chamfer:{radius:5}});bodies.push(body);if(i>1)this.scene.matter.add.constraint(bodies[i-2],body,1,.98,{pointA:{x:Math.cos(ang)*len/2,y:Math.sin(ang)*len/2},pointB:{x:-Math.cos(ang)*len/2,y:-Math.sin(ang)*len/2}})}this.g.clear();this.onRelease?.()}
 destroy(){this.scene.input.removeAllListeners();this.g.destroy()}
}
