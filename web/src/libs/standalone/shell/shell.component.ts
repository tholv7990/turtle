import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsActiveMatchOptions, Router, RouterModule } from '@angular/router';



@Component({
  selector: 'shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  public dark = localStorage.getItem('theme');

  public menu: any[] = [];

  public isActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'subset',
    fragment: 'ignored'
};

  constructor(public router: Router) {

    this.menu = this.router.config[0].children as any[];
   
  }

  ngOnInit(): void {
  }

  isActive(path: string): boolean {
    return this.router.isActive(path, this.isActiveOptions);
  }

  public onSwitchDisplayMode(){

    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark')
    }

    this.dark = localStorage.getItem('theme');
  }

}
