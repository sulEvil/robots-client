import { makeAutoObservable } from "mobx"

export default class AnswerStore {
   constructor() {
      this._answers = [
         {id: 1, text: 'Загрузка...', type: 'Загрузка...'}
      ]
      makeAutoObservable(this)
   }

   setAnswers(answers){
      this._answers = answers
   }
   get answers(){
      return this._answers
   }
}