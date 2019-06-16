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

  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
