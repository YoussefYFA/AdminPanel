import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsComponent } from "../products/products.component";

@Component({
    selector: 'app-categoriespage',
    standalone: true,
    templateUrl: './categoriespage.component.html',
    styleUrl: './categoriespage.component.scss',
    imports: [ProductsComponent]
})
export class CategoriespageComponent {

  constructor(){
    
  }

}
