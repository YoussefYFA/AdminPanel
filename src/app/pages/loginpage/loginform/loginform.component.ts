import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../../auth.service';
import { emailValidator } from '../../registrationpage/Validators/emailvalidator/emailvalidator';
import { UserService } from '../../../userservice/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatListModule, MatIconModule,
  MatInputModule,MatFormFieldModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss'
})
export class LoginformComponent {

  loginForm = new FormGroup ({

    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });
usernameA = this.loginForm.get('username')!.value
passwordA = this.loginForm.get('password')!.value
Wrongcredentials = false

  get loginData() {
    return this.loginForm.value;
  }

constructor(private authService: AuthService,
  private userService: UserService,) {}
  onLogin() {
    

    console.log(this.loginForm.value);
    console.log("Login button works!");

    const {username, password} = this.loginForm.value;

    this.authService.login(username!, password!);
    this.Wrongcredentials = true;
}



}
