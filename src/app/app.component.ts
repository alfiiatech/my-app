import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './auth/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout;
  }
}
