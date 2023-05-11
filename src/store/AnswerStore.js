import { makeAutoObservable } from "mobx"

export default class AnswerStore {
   constructor() {
      this._answer = [
         {id: 1, text: 'Вопрос'},
         {id: 2, text: 'Вопрос 2'},
         {id: 3, text: 'Вопрос 3'},
         {id: 5, text: 'Вопрос 4'}
      ]
      makeAutoObservable(this)
   }

   setAnswer(answer){
      this._answer = answer
   }
   get answer(){
      return this._answer
   }
}