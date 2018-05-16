import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';


@Injectable()
export class CocktailService {

  private baseUrl = `${environment.apiUrl}/cocktails`;


  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/`, options)
      .toPromise();
  }

  listUserCocktail(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, options)
      .toPromise();
  }

  getOne(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }

  createOne(cocktail): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/create`, cocktail,  options)
      .toPromise();
  }
  edit(cocktail): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/${cocktail._id}/edit`, cocktail, options)
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
