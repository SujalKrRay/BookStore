import { Component } from '@angular/core';
import { LRForm } from 'src/app/interfaces/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'comp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: LRForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
