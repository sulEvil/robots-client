import { makeAutoObservable } from "mobx"

export default class AnswerStore {
   constructor() {
      this._answers = [
         {id: 1, question: 'Вопрос 1', answer: "Ответ 1", robotName: "Ресторан-кошечка", createdAt: "23.03.2023"},
         {id: 2, question: 'Вопрос 2', answer: "Ответ 2" , robotName: "Ресторан-кошечка" , createdAt: "23.03.2023"},
         {id: 3, question: 'Вопрос 3', answer: "Ответ 3!" , robotName: "Офис" , createdAt: "23.03.2023"},
         {id: 5, question: 'Вопрос 4', answer: "Ответ 4" , robotName: "Офис" , createdAt: "23.03.2023"}
      ]
      makeAutoObservable(this)
   }

   setAnswer(answers){
      this._answers = answers
   }
   get answers(){
      return this._answers
   }
}