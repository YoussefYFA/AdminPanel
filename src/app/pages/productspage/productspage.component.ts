import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { Productinterface } from '../../productinterface';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-productspage',
    standalone: true,
    templateUrl: './productspage.component.html',
    styleUrl: './productspage.component.scss',
    imports: [CommonModule, ProductsComponent]
})

export class ProductspageComponent {
  data: Productinterface[] = []

  productsService: ProductsService = inject(ProductsService);
 
  constructor(private user: ProductsService)
   
  {this.user.getData().subscribe(data =>{
     
     this.data=data
   })
 }
}

