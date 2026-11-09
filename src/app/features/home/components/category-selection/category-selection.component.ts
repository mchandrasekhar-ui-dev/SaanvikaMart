import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { Category } from '../../../../models/category.model';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule],
  templateUrl: './category-selection.component.html',
  styleUrl: './category-selection.component.css'
})
export class CategorySelectionComponent implements OnInit{
  // results:any
   categories :Category[]=[];
  constructor(private categoory:CategoryService){}
  ngOnInit(){
    this.mydata()
  }


  mydata(){
   
  this.categoory.getdata().subscribe({

        next:(response:Category[])=>{
          this.categories =response.filter(
            category => category.isActive
          );
        },
        error:(error) =>{
          console.error("data getting error",error)
        }
    })
       
    
  }



}
