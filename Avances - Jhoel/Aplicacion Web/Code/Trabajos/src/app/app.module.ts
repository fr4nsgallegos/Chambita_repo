import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { TformularioComponent } from './tformulario/tformulario.component';
import { TdetallesComponent } from './tdetalles/tdetalles.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

const appRoutes: Routes = [
  { path: 'chambitas', component: AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registeruser', component: RegisterUserComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tformulario', component: TformularioComponent},
  { path: 'tdetalles', component: TdetallesComponent}
];


@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, RegisterUserComponent, HomeComponent, TformularioComponent, TdetallesComponent],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, FormsModule, HttpClientModule, SocialLoginModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('561602290896109'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}