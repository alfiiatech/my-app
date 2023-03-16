import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: RegisterForm = {
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  };



  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  register() {

    this.authService.register(this.form)
    
  }


 
 
}
