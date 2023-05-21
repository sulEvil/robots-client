import { makeAutoObservable } from "mobx"

export default class RobotStore {
   constructor() {
      this._robots = [
         {id: 1, desc: 'Описание робота', name: 'Белла-бот', deviceId: "123abc123"},
         {id: 2, desc: 'Описание робота', name: 'Софт-бот', deviceId: "234abc123"},
         {id: 3, desc: 'Описание робота', name: 'Робот-бот', deviceId: "456abc123"},
         {id: 5, desc: 'Описание робота', name: 'Алан-бот', deviceId: "567abc123"}
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