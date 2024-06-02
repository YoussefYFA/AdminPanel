import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ProductsService } from '../pages/products.service';
import { Productinterface } from '../productinterface';

@Component({
  selector: 'app-categorieschart',
  standalone: true,
  imports: [],
  templateUrl: './categorieschart.component.html',
  styleUrl: './categorieschart.component.scss',
})
export class CategorieschartComponent {
  productsList: Productinterface[] = [];
  categories: string[] = [];

  constructor(private products: ProductsService) {
    this.products.getData().subscribe((productsList) => {
      this.productsList = productsList;
      this.categories = Array.from(
        new Set(this.productsList.map((product) => product.category))
      );

      console.log('A ' + this.categories);
      this.createChart();
    });
  }

  createChart() {
    
    // Create an object to hold the counts for each category
  let categoryCounts: any = {};

  // Iterate over the products list and increment the count for each category
  for (let product of this.productsList) {
    if (categoryCounts[product.category]) {
      categoryCounts[product.category]++;
    } else {
      categoryCounts[product.category] = 1;
    }
  }

  // Creates arrays for the labels and data from the categoryCounts object
  let labels = Object.keys(categoryCounts);
  let data = Object.values(categoryCounts);


    new Chart('categoriesChart', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: '# of Products',
            data: data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'teal',
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }
}
