import {
  Component,
  computed,
  signal,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { HeaderComponent } from './components/header/header.component';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SearchdataService } from './searchdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
    RouterModule,
  ],
})
export class AppComponent 
// implements OnInit 
{
  constructor(private searchService: SearchdataService) {}

  title = 'AdminPanel';
  collapsed = signal(true);
  sidenavWidth = computed(() => (this.collapsed() ? '70px' : '250px'));
  // searchText: string = '';

  // ngOnInit(): void {
  //   this.searchService.currentSearchText.subscribe(
  //     (searchText) => (this.searchText = searchText)
  //   );
  // }

  // onSearchTextChanged(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   if (inputElement) {
  //     this.searchText = inputElement.value;
  //     this.searchService.updateSearch(this.searchText);
  //     console.log(this.searchService.currentSearchText);
  //   }
  // }
}
