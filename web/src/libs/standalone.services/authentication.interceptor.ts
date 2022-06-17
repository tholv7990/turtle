import { Location } from '@angular/common';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private location: Location) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).
            pipe(catchError(err => this.handleError(err)));
    }

    private handleError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 || err.status === 403) {
            const url = ConfigService.environment.jms.logoutHref;
            UtilService.navigate(url, `${ConfigService.origin}${this.location.path()}`);
            return of(err.message);
        }

        return throwError(err);
    }
}
