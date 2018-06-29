import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';


@Injectable()
export class CocktailService {

  private apiUrl = environment.apiUrl + '/cocktails';



  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}/`, options)
      .toPromise();
  }

  listUserCocktail(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}/users/${id}`, options)
      .toPromise();
  }

  getOne(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}/${id}`, options)
      .toPromise();
  }

  createOne(cocktail): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.apiUrl}/create`, cocktail,  options)
      .toPromise();
  }
  edit(cocktail): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.apiUrl}/${cocktail._id}/edit`, cocktail, options)
      .toPromise();
  }

  deleteOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.apiUrl}/${id}/delete`, options)
      .toPromise();
  }

}
