import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';



@Injectable()
export class UserService {

  private apiUrl = environment.apiUrl + '/users';



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

  getOne(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}/${id}`, options)
      .toPromise();
  }

  edit(user): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.apiUrl}/${user._id}/edit`, user, options)
      .toPromise();
  }

}
