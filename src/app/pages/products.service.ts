import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productinterface } from '../productinterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Productinterface[] = [
    {id: 1,
    title: "Example Product",
    description: "This is a product description...",
    price: 19.99,
    image: "https://example.com/product-image.jpg",
    category: "Electronics",}
  ];

  getAllProducts(): Productinterface[]{
    return this.productsList;}
 
  constructor( private http:HttpClient) { }
  getData(): Observable<Productinterface[]> {
    let url="https://fakestoreapi.com/products";
    return this.http.get<Productinterface[]>(url);
      
  }

  getProduct(id: string): Observable<Productinterface> {
    return this.http.get<Productinterface>(`https://fakestoreapi.com/products/${id}`);
  }

  updateProduct(product: Productinterface): Observable<Productinterface> {
    return this.http.put<Productinterface>(`https://fakestoreapi.com/products/${product.id}`, product);
  }
}



 /*getAllProductsByCategory(category: string): Productinterface | undefined {
    return this.productsList.find(productspage => ProductsComponent.category === category);
  }
  */