import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, AuthenticateRequest, AuthenticateResponse } from '@libs/model';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authAPI = ' http://localhost:3000/api/auth/';

  constructor(private http: HttpClient) { }

  public checkExists(email: string): Observable<boolean> {

    return this.http.get<boolean>(`${this.authAPI}${email}`)
    .pipe(
      map(x => x),
      catchError(error => {
        return of(false);
      })
    );

  }

  public login(request: AuthenticateRequest): Observable<AuthenticateResponse> {

    return this.http.post<AuthenticateResponse>(`${this.authAPI}login`, request)
    .pipe(
      map(x => x),
      catchError(error => {
        return of({
          success: false,
          message: error,
          token: null
        } as AuthenticateResponse);
      })
    );

  }

  public register(request: Account): Observable<Account> {

    return this.http.post<Account>(`${this.authAPI}register`, request)
    .pipe(
      map(x => x),
      catchError(error => {
        return of(null)
      })
    )
  }


}
