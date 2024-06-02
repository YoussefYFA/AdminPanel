import { Component, Input, inject } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { Productinterface } from '../../productinterface';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SearchdataService } from '../../searchdata.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, 
    RouterModule, MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl:  './products.component.scss',
})

export class ProductsComponent {
  productsList: Productinterface[] = [];
  filteredProducts: Productinterface[] = [];
  searchedProductsList: Productinterface[] = [];
  categories: string[] = [];
  productsService: ProductsService = inject(ProductsService);
  searchText: string = '';
  currentPage = 0;
  productsAmount = 0;
  initialPageSize: number = 7;
  chosenPageSize: number = this.initialPageSize;


  constructor(private user: ProductsService, private searchService: SearchdataService)
  {
    this.user.getData().subscribe(productsList =>{
     this.productsList=productsList
     this.categories = Array.from(new Set(this.productsList.map(product => product.category)));
     this.filteredProducts = this.productsList;
     this.productsAmount = this.productsList.length;
   })
 }

 filterProductsByCategory(category: string) {
  return this.productsList.filter(product => product.category === category);}

 ngOnInit(): void {
 
  this.searchService.currentSearchText.subscribe(
    (searchText) => (this.searchText = searchText)
  );
}


 showAllProducts() {
  this.filteredProducts =  this.productsList
}

searchProductsBySearchText() {
  return this.productsList.filter(product => {
    return (
      product.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.price.toString().includes(this.searchText.toLowerCase()))}
    );
  }

editProductDetails(id: number) {
  console.log(id)
}

onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
  this.searchProductsBySearchText();
}


handlePageEvent(pageEvent: PageEvent){
  //console.log('pageIndex=', pageEvent.pageIndex)
  this.currentPage=pageEvent.pageIndex;
  this.chosenPageSize=pageEvent.pageSize
  this.filteredProducts = this.productsList.slice(this.chosenPageSize*this.currentPage, this.chosenPageSize*(this.currentPage+1));
}

}
