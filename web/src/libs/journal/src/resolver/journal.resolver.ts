import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Journal } from '@libs/model';
import { Observable, of } from 'rxjs';
import { JournalService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class JournalResolver implements Resolve<Journal[]> {

  constructor(private journalService: JournalService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Journal[]> {

    return this.journalService.getAll();
  }

}
