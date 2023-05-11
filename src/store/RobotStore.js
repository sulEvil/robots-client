import { makeAutoObservable } from "mobx"

export default class RobotStore {
   constructor() {
      this._robots = [
         {id: 1, desc: 'Описание робота', name: 'Белла-бот'},
         {id: 2, desc: 'Описание робота', name: 'Софт-бот'},
         {id: 3, desc: 'Описание робота', name: 'Робот-бот'},
         {id: 5, desc: 'Описание робота', name: 'Алан-бот'}
      ]
      makeAutoObservable(this)
   }
   
   setRobots(robots){
      this._robots = robots
   }
   get robots(){
      return this._robots
   }
   
}