import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingLocation } from '../../housinglocation';
import { HousingService } from '../../housing.service';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  
    housingLocationList: HousingLocation[] = []

    housingService: HousingService = inject(HousingService);
     
     constructor() {this.housingLocationList = this.housingService.getAllHousingLocations();
      }
      }

// templateUrl: './dashboard.component.html',
//styleUrl: './dashboard.component.css'
//to move back and cut html to html file