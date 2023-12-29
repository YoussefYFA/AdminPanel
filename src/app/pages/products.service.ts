import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productinterface } from '../productinterface';
import { ProductsComponent } from './products/products.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Productinterface[] = [];

  getAllProducts(): Productinterface[]{
    return this.productsList;}
  
 
  constructor( private http:HttpClient) { }
  getData(): Observable<Productinterface[]> {
    let url="https://fakestoreapi.com/products";
    return this.http.get<Productinterface[]>(url);
      
  }
}


 /*getAllProductsByCategory(category: string): Productinterface | undefined {
    return this.productsList.find(productspage => ProductsComponent.category === category);
  }
  */