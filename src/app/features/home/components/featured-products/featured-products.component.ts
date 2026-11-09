import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../models/product.model';



@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatCardModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent implements OnInit {
  product:Product[]=[];
  constructor(private productservice:ProductService ){}
  ngOnInit(){}

  gettingdata(){
     this.productservice.getdata().subscribe({
      next:(response:Product[])=>{
          this.product=response.slice(0-8)
      },
      error:(error)=>{
               console.error("error message containg",error)
      }

     })
  }
}

