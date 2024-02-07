import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
@Component({
    selector: 'app-registrationpage',
    standalone: true,
    templateUrl: './registrationpage.component.html',
    styleUrl: './registrationpage.component.scss',
    imports: [ProfileEditorComponent]
})
export class RegistrationpageComponent {


  constructor(private router: Router) {}


}
