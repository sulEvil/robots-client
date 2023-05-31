import { makeAutoObservable } from "mobx"

export default class RobotStore {
   constructor() {
      this._robots = [
         {id: 1, desc: 'Загрузка', name: 'Загрузка', deviceId: "123abc123"},

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