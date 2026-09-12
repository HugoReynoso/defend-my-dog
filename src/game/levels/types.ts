export type BeeType='normalBee'|'fastBee';
export interface RectDef{x:number;y:number;width:number;height:number}
export interface LevelData{id:number;survivalTime:number;maxInk:number;player:{x:number;y:number};hives:{x:number;y:number;beeCount:number;beeType:BeeType;spawnDelay:number}[];platforms:RectDef[];walls?:RectDef[];spikes?:{x:number;y:number;width:number}[];rocks?:{x:number;y:number;r:number}[];starThresholds:{twoStars:number;threeStars:number};hint?:string}
