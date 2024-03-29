import { Injectable } from "@angular/core";
import { IUser } from "../shared/models/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    let options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    let loginInfo = { username: userName, password: password };

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false)
      }));
    ;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe();
  }

  updateCurrentUser(firstName, lastName) {
    let options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    return this.http
      .put<IUser>(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    let options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    this.currentUser = undefined;
    return this.http.post('/api/logout', {}, options);
  }
}
