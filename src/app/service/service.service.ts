import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    registerData(data){
      // const data = {
      //   username: username,
      //   password: password,
      //   firstname: firstname,
      //   lastname: lastname,
      //   tel: tel
      // }
      return this.http.post<any>(`${this.url}/register`,data);
    }

    login(data){
      return this.http.post<any>(`${this.url}/login`, data);
    }

    addNews(data){
      return this.http.post<any>(`${this.url}/addnews`, data);
    }

    getNews(){
      return this.http.get<any>(`${this.url}/news`);
    }

    findNews(data){
      return this.http.post<any>(`${this.url}/findNews`, data);
    }

    deleteNews(id){
      return this.http.delete(`${this.url}/deleteNews/${id}`);
    }

    editNews(id){
      return this.http.get<any>(`${this.url}/edit/${id}`);
    }

    // updateNews(id, data){
    //   return this.http.post(`${this.url}/update/${id}`, data);
    // }
}
