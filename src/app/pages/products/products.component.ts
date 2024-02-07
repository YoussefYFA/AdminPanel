import { Component, Input, inject } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { Productinterface } from '../../productinterface';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './products.component.html',
  styleUrl:  './products.component.scss',
})

export class ProductsComponent {
  productsList: Productinterface[] = [];
  filteredProducts: Productinterface[] = [];
  categories: string[] = [];

  productsService: ProductsService = inject(ProductsService);

  filterProductsByCategory(category: string) {
    return this.productsList.filter(product => product.category === category);}

  //future code for search function, will delete if unused
  //_filterText: string = ""
  //filteredproductsList: Productinterface[] = []
  constructor(private user: ProductsService)
  {
    this.user.getData().subscribe(productsList =>{
     console.warn(productsList)
     this.productsList=productsList
     this.categories = Array.from(new Set(this.productsList.map(product => product.category)));
     this.filteredProducts = this.productsList;
   })
 }

 showAllProducts() {
  this.filteredProducts = this.productsList;
}

}
