import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { SearchdataService } from '../../searchdata.service';
import "@material/web/button/elevated-button";
import "@material/web/button/outlined-button";
import "@material/web/button/filled-tonal-button";
import "@material/web/button/filled-button";

@Component({
  selector: 'app-header',
  standalone: true,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule, MatToolbarModule, MatButtonModule, 
    MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  constructor(private searchService: SearchdataService) {}

  searchText: string = '';

  ngOnInit(): void {
    this.searchService.currentSearchText.subscribe(
      (searchText) => (this.searchText = searchText)
    );
  }

  onSearchTextChanged(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.searchText = inputElement.value;
      this.searchService.updateSearch(this.searchText);
      console.log(this.searchService.currentSearchText);
    }
  }
  
}
