import { Component } from '@angular/core';
import { LRForm } from 'src/app/interfaces/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'comp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: LRForm={
    email:'',
    password:'',
    confirm_password:'',
  }

  constructor(private authService:AuthService){}

  submit(){
    this.authService.login(this.form)
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
