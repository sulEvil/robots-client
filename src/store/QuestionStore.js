import { makeAutoObservable } from "mobx"

export default class QuestionStore {
   constructor() {
      this._types = [
         {id: 1, name: 'Да/Нет'},
         {id: 2, name: 'Мнение'},
         {id: 3, name: 'Числовой'}
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