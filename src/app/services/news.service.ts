import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }


  getTopHeadLines() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=da0f94ecd88c4909b12ab58f7c054641');
  }

}
