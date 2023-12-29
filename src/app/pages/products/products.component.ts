import { Component, Input, inject } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { Productinterface } from '../../productinterface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl:  './products.component.scss',
})

export class ProductsComponent {
  data: Productinterface[] = []

  productsService: ProductsService = inject(ProductsService);
 
  constructor(private user: ProductsService)
   
  {this.user.getData().subscribe(data =>{
     console.warn(data)
     this.data=data
   })
 }
}

  /* old code, delete
export class ProductsComponent {
title = 'products'

  constructor ( private product:ProductsService){
    
    this.product.getData().subscribe(data =>{

      console.warn(data)
    }) 
    
  }

}
*/