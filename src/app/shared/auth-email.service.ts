import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthEmailService {
  private api = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  public sendEmail(body: UserModel) {
    return this.http.post(`${this.api}/sendEmail`, body);
  }



}
