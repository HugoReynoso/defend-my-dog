import type {LevelData} from './types';
const ground={x:195,y:795,width:390,height:98};
export const levels:LevelData[]=[
 {id:1,survivalTime:6,maxInk:300,player:{x:195,y:716},hives:[{x:70,y:155,beeCount:5,beeType:'normalBee',spawnDelay:500}],platforms:[ground],starThresholds:{twoStars:.65,threeStars:.35},hint:'DRAW TO PROTECT THE DOG'},
 {id:2,survivalTime:7,maxInk:250,player:{x:265,y:716},hives:[{x:55,y:575,beeCount:7,beeType:'normalBee',spawnDelay:420}],platforms:[ground],starThresholds:{twoStars:.62,threeStars:.34}},
 {id:3,survivalTime:7,maxInk:225,player:{x:90,y:716},hives:[{x:315,y:160,beeCount:7,beeType:'normalBee',spawnDelay:400}],platforms:[ground],walls:[{x:20,y:545,width:40,height:400}],starThresholds:{twoStars:.62,threeStars:.34}},
 {id:4,survivalTime:8,maxInk:240,player:{x:120,y:716},hives:[{x:310,y:145,beeCount:8,beeType:'normalBee',spawnDelay:390}],platforms:[{x:75,y:795,width:150,height:98},{x:315,y:795,width:150,height:98}],starThresholds:{twoStars:.6,threeStars:.32}},
 {id:5,survivalTime:8,maxInk:245,player:{x:195,y:575},hives:[{x:65,y:150,beeCount:8,beeType:'normalBee',spawnDelay:350}],platforms:[ground,{x:195,y:640,width:115,height:22}],spikes:[{x:195,y:780,width:140}],starThresholds:{twoStars:.6,threeStars:.32}},
 {id:6,survivalTime:9,maxInk:280,player:{x:195,y:716},hives:[{x:55,y:170,beeCount:6,beeType:'normalBee',spawnDelay:380},{x:335,y:220,beeCount:5,beeType:'fastBee',spawnDelay:440}],platforms:[ground],starThresholds:{twoStars:.58,threeStars:.3}},
 {id:7,survivalTime:9,maxInk:275,player:{x:115,y:716},hives:[{x:325,y:180,beeCount:7,beeType:'fastBee',spawnDelay:390}],platforms:[ground],rocks:[{x:205,y:190,r:29}],starThresholds:{twoStars:.58,threeStars:.3}},
 {id:8,survivalTime:10,maxInk:250,player:{x:195,y:500},hives:[{x:60,y:175,beeCount:8,beeType:'fastBee',spawnDelay:360}],platforms:[ground,{x:195,y:565,width:125,height:22}],spikes:[{x:195,y:780,width:180}],starThresholds:{twoStars:.56,threeStars:.29}},
 {id:9,survivalTime:11,maxInk:270,player:{x:195,y:600},hives:[{x:48,y:180,beeCount:7,beeType:'normalBee',spawnDelay:330},{x:342,y:220,beeCount:6,beeType:'fastBee',spawnDelay:390}],platforms:[ground,{x:195,y:665,width:130,height:20}],spikes:[{x:195,y:780,width:210}],starThresholds:{twoStars:.55,threeStars:.28}},
 {id:10,survivalTime:12,maxInk:230,player:{x:195,y:590},hives:[{x:50,y:165,beeCount:7,beeType:'fastBee',spawnDelay:320},{x:340,y:260,beeCount:6,beeType:'normalBee',spawnDelay:350}],platforms:[ground,{x:195,y:655,width:115,height:20},{x:70,y:420,width:90,height:18}],walls:[{x:370,y:600,width:30,height:390}],spikes:[{x:195,y:780,width:220}],rocks:[{x:280,y:155,r:27}],starThresholds:{twoStars:.52,threeStars:.25}}
];
export const getLevel=(id:number)=>levels[Math.max(0,Math.min(levels.length-1,id-1))];
