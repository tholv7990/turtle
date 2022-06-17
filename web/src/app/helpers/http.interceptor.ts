import {  HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from '@libs/utils';
import { ConfigService } from '@libs/utils/config.service';
import {  Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private location: Location) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        return next.handle(req).
            pipe(catchError(err => this.handleError(err)));
    }

    private handleError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 || err.status === 403) {
          //  UtilService.navigate('login', `${ConfigService.origin}${this.location.path()}`);
            return of(err.message);
        }

        return throwError(err);
    }
}
