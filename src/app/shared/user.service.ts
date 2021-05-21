import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../classes/user';

//const API_URL = 'https://dry-bastion-69323.herokuapp.com/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://dry-bastion-69323.herokuapp.com/api/users';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  users: Array<User> = new Array<User>();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('https://dry-bastion-69323.herokuapp.com/api/users/')
      .subscribe((data) => {
        console.log(data);
      });
  }

  getAllUsers(): Observable<User[]> {
    const API_URL = `${this.url}`;
    return this.httpClient.get(API_URL, { headers: this.headers })
      .pipe(
        map((response: any) => response || {}),
        catchError(this.errorMgmt)
      );
  }

  // Gère les erreurs par rapport au coté serveur
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getUser(id: number): Observable<any> {
    const API_URL = `${this.url}/${id}`;
    //return this.httpClient.get(API_URL);
     return this.httpClient.get(API_URL, {headers: this.headers })
     .pipe(
       map((response: any) => response),
    catchError(this.errorMgmt)
     );

  }

  deleteUser(id: number) {
    const API_URL = `${this.url}/${id}`;
    return this.httpClient
      .delete<User>(API_URL, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.errorMgmt)
      );
    // return this.httpClient.delete(API_URL)
    //   .pipe(catchError(this.errorMgmt));
  }

  addUser(data: any): Observable<any> {
    const API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

}

