import { makeAutoObservable } from "mobx"

export default class RobotStore {
   constructor() {
      this._robots = [
         {id: 1,
            desc: 'Описание',
            name: 'Имя',
            deviceId: "123abc123",
            backgroundColor: "#000000",
            buttonColor: "#000000",
            fontColor: "#000fff",
            logo: "src"
            },

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