import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token, UserLogin } from '../../models/apiModels';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getToken(body: UserLogin): Observable<any> {
    const url = environment.urlApi + 'sign_in';
    return this.http.post<Token>(url, body);
  }
}
