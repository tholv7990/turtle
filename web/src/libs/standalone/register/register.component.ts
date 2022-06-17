import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@libs/standalone.services';
import { lastValueFrom, map, of , delay, switchMap} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  public form: UntypedFormGroup;
  private authAPI = ' http://localhost:3000/api/auth/';

  constructor(builder: UntypedFormBuilder,  
     private router: Router,
     private authenticationService: AuthenticationService,
     private http: HttpClient ) {

    this.form = builder.group({
      email: [null, [Validators.required], this.validateNameAsync.bind(this)],
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    });

  }

  ngOnInit(): void {
   
  }

  public async onRegister() {

    const account = this.form.value;

    const result = await lastValueFrom(this.authenticationService.register(account));


  }

  public onLogin(){
    this.router.navigate(['login'])
  }

  validateNameAsync(control: FormControl) {
		return of(control.value)
			.pipe(
				delay(500),
				switchMap(value => {
          
					return this.http
						.get<boolean>(`${this.authAPI}${value}`)
						.pipe(
							map((res: boolean) => {
								return res ? {exists: true,  message: `Account with email ${value} already exists.` } : null;
							}));
				})
			);
	}

}
