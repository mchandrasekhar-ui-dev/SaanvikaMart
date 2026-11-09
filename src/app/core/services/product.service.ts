import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

    private Api_Url="http://localhost:3000/products";


    getdata():Observable<Product[]>{
      return  this.http.get<Product[]>(this.Api_Url)

    }

}
