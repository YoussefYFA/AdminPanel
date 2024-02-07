import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { emailValidator } from '../Validators/emailvalidator/emailvalidator';
import { UserService } from '../../../userservice/user.service';


@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    MatListModule, MatIconModule, MatInputModule,MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss'
})

export class ProfileEditorComponent {

  //constructor(private user: UserService) {}


  profileForm = new FormGroup({
   // firstName: new FormControl('', Validators.required),
   // lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password1: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    password2: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.pattern('.+@.+\\.[a-zA-Z]{1,}'), emailValidator('email')]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(11), Validators.pattern('^[0-9]*$')]),
  });

  
  get profileData() {
    return this.profileForm.value;
  }

 
  onbutton() {
    console.log(this.profileForm.value);
    console.log("Hello")
    //this.profileForm.get('email')!.setErrors({ 'incorrect': true });
  }


}

