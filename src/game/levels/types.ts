export type BeeType='normalBee'|'fastBee';
export interface RectDef{x:number;y:number;width:number;height:number;angle?:number}
export type WorldTheme='meadow'|'canyon'|'storm'|'sky'|'volcano';
export type Difficulty='FACILE'|'MEDIO'|'DIFFICILE';
export interface LevelData{id:number;world:number;worldName:string;theme:WorldTheme;difficulty:Difficulty;survivalTime:number;maxInk:number;player:{x:number;y:number};hives:{x:number;y:number;beeCount:number;beeType:BeeType;spawnDelay:number}[];platforms:RectDef[];walls?:RectDef[];spikes?:{x:number;y:number;width:number}[];rocks?:{x:number;y:number;r:number}[];liquid?:'water'|'lava';starThresholds:{twoStars:number;threeStars:number};hint?:string;strategy?:string}
