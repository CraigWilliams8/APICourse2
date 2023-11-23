import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class SaleService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  startSale() 
  {
    this.http.put<Product>(this.baseUrl + 'products/start-sale', {title: 'Half Price'}).subscribe()
  }

  endSale()
  {
    this.http.put<Product>(this.baseUrl + 'products/end-sale', {titel: 'Full Price'})
    .subscribe()
  }

}
