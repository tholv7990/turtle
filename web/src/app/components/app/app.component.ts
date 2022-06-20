import {  Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'body',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.less'],
   encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public menu: any[] = [];

  constructor(public router: Router) {

    this.menu = this.router.config[0].children as any[];

    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }


  public logout(){}
}
