import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { emailValidator } from '../../registrationpage/Validators/emailvalidator/emailvalidator';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    MatListModule, MatIconModule, MatInputModule,MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss'
})
export class LoginformComponent {

  loginForm = new FormGroup ({

    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });

  get loginData() {
    return this.loginForm.value;
  }

 
  onbutton() {
    console.log(this.loginForm.value);
    console.log("Hello")
    //this.profileForm.get('email')!.setErrors({ 'incorrect': true });
  }
}
