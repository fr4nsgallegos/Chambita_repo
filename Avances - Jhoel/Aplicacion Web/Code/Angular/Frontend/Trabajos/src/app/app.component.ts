import { Component, OnInit } from '@angular/core';

import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor() { }
	title='Trabajos';
  ngOnInit(): void {
  }
  
}