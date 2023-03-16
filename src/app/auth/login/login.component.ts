import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: '',
  };
// isLoading: any;



  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit() {

    this.authService.login(this.form)
   
  }

  isLoading(){
    return this.authService.isLoading;

  }

}
