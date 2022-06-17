import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@libs/standalone.services';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public form: UntypedFormGroup;
  public error = null;

  constructor(builder: UntypedFormBuilder,  
     private router: Router,
     private authenticationService: AuthenticationService,
     private cdr: ChangeDetectorRef
     ) {
    this.form = builder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public async onLogin() {

    const request = this.form.value;

    const result = await lastValueFrom(this.authenticationService.login(request));

    if(result?.success) {
      this.router.navigate(['journal']);
      localStorage.setItem('auth_token', result.token);

      return;
    }

    this.error = result.message;

  this.cdr.markForCheck();

  }

  public onRegister(){
    this.router.navigate(['register'])
  }

}
