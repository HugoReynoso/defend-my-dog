export interface SaveData{highestUnlockedLevel:number;starsPerLevel:Record<string,number>;coins:number;selectedCharacter:string;unlockedCharacters:string[];soundEnabled:boolean;musicEnabled:boolean;tutorialCompleted:boolean}
const defaults:SaveData={highestUnlockedLevel:1,starsPerLevel:{},coins:0,selectedCharacter:'Dog',unlockedCharacters:['Dog'],soundEnabled:true,musicEnabled:true,tutorialCompleted:false};
export class SaveManager{
 static load():SaveData{try{const raw=localStorage.getItem('defendMyDogSave');const parsed=raw?JSON.parse(raw):{};return {...defaults,...parsed,starsPerLevel:{...defaults.starsPerLevel,...parsed.starsPerLevel}}}catch{return {...defaults}}}
 static save(data:SaveData){try{localStorage.setItem('defendMyDogSave',JSON.stringify(data))}catch{/* private mode */}}
 static complete(level:number,stars:number){const s=this.load();const old=s.starsPerLevel[level]||0;s.starsPerLevel[level]=Math.max(old,stars);s.highestUnlockedLevel=Math.max(s.highestUnlockedLevel,Math.min(20,level+1));if(!old)s.coins+=10+(stars===3?10:0);s.tutorialCompleted=true;this.save(s);return s}
}
