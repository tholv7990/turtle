import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppComponent } from './components';
import { LoginComponent,  RegisterComponent, ShellComponent } from '@libs/standalone';
import { HttpClientModule } from '@angular/common/http';

localStorage.theme = localStorage?.theme ??  'dark';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: () => {
              const config = {
                  authScheme: '',
                  tokenGetter: () => localStorage.getItem('auth_token'),
                  skipWhenExpired: true,
                  allowedDomain: new Array(new RegExp('^null$'))
              };
              return config;
          }
      }
  }),
  ShellComponent,
  RegisterComponent,
  LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
