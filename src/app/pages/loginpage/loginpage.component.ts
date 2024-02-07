import { Component } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [LoginformComponent],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {

}
