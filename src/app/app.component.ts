import { Component, computed, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl:  './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
    ProductspageComponent,
    HeaderComponent,
    RouterModule
  ],
})
export class AppComponent {
  title = 'AdminPanel';
  
  collapsed = signal(true);
  sidenavWidth = computed(() => (this.collapsed() ? '70px' : '250px'));
}
