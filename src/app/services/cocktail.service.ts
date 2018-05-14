import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()
export class CocktailService {

  private baseUrl = 'http://localhost:3000';


  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/cocktails`, options)
      .toPromise();
  }

  listUserCocktail(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/cocktails/users/${id}`, options)
      .toPromise();
  }

  getOne(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/cocktails/${id}`, options)
      .toPromise();
  }

  createOne(cocktail): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/cocktails/create`, cocktail,  options)
      .toPromise();
  }

  deleteOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseUrl}/cocktails/${id}/delete`, options)
      .toPromise();
  }

}
