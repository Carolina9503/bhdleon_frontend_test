import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/apiModels';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlApi = 'https://c5abcfc2-d93f-44e1-afee-3b413858038a.mock.pstmn.io';

  constructor(private http: HttpClient) {}

  getUser(token: string) {
    const url = this.urlApi + '/na';
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(url, { headers });
  }
}
