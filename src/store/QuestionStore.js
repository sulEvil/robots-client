import { makeAutoObservable } from "mobx"

export default class QuestionStore {
   constructor() {
      this._types = [
         {id: 1, name: 'Простой вопрос'},
         {id: 2, name: 'Мнение'},
         {id: 3, name: 'Возраст'},
         {id: 4, name: 'Дата рождения'},
         {id: 5, name: 'Номер телефона'},
         {id: 6, name: 'Оценка до 5'},
         {id: 7, name: 'Оценка до 10'},
         {id: 8, name: 'email'},
         {id: 9, name: 'ФИО'},
      ]
      this._questions = [
         {id: 1, text: 'Загрузка...'}
      ]
      makeAutoObservable(this)
   }
   
   setTypes(types){
      this._types = types
   }
   setQuestions(questions){
      this._questions = questions
   }
   get types(){
      return this._types
   }
   get questions(){
      return this._questions
   }
   
}