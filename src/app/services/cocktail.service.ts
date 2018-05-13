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

  getOne(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/cocktails/${id}`, options)
      .toPromise();
  }

}
