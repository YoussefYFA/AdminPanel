import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../pages/products.service';
import { Productinterface } from '../productinterface';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SearchdataService } from '../searchdata.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-producteditpage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './producteditpage.component.html',
  styleUrl: './producteditpage.component.scss',
})
export class ProducteditpageComponent {
  editProductForm = new FormGroup({
    productTitle: new FormControl('', Validators.required),
    productPrice: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    productDescription: new FormControl('', Validators.required),
    productImageUrl: new FormControl('', Validators.required),
  });

  productData: undefined | Productinterface;
  productMessage: undefined | string;
  searchText: string = '';


  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private searchService: SearchdataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId &&
      this.productService.getProduct(productId).subscribe((data) => {
        console.log(data);
        console.log(productId);
        this.productData = data;
      });
    this.searchService.currentSearchText.subscribe(
      (searchText) => (this.searchText = searchText)
    );
  }

  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
   /* this.productService.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has been successfully updated!';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 5000);
    */
    console.log(data);
  }

  openSnackBar() {
    this.snackBar.open('Update successful!', 'close', { duration: 500 });
  }
}
