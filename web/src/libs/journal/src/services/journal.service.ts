import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journal } from '@libs/model';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class JournalService {

  private journalAPI = ' http://localhost:3000/api/journal';

  constructor(private http: HttpClient) { }

  public save(request: Journal): Observable<Journal> {

    return this.http.post<Journal>(`${this.journalAPI}`, request)
    .pipe(
      map(x => x),
      catchError(error => {
        return of(null)
      })
    )
  } 
}
