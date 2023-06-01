import { makeAutoObservable } from "mobx"

export default class ReviewsStore {
   constructor() {
      this._types = [
         {id: 1, name: 'Да/Нет'},
         {id: 2, name: 'Мнение'},
         {id: 3, name: 'Числовой'}
      ]
      this._reviews = [
         {id: 1, question: 'Загрузка...', answer: "Загрузка...", robotName: "Загрузка...", createdAt: "Загрузка..."},
      ]
      makeAutoObservable(this)
   }
   
   setTypes(types){
      this._types = types
   }
   setReviews(reviews){
      this._reviews = reviews
   }
   get types(){
      return this._types
   }
   get reviews(){
      return this._reviews
   }
   
}