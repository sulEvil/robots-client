import { makeAutoObservable } from "mobx"

export default class QuestionStore {
   constructor() {
      this._types = [
         {id: 1, name: 'Да/Нет'},
         {id: 2, name: 'Мнение'},
         {id: 3, name: 'Числовой'}
      ]
      this._questions = [
         {id: 1, text: 'Вопрос'},
         {id: 2, text: 'Вопрос 2'},
         {id: 3, text: 'Вопрос 3'},
         {id: 5, text: 'Вопрос 4'}
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