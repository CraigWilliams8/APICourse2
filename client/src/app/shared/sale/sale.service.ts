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
    this.http.put<any>(this.baseUrl + 'products/start-sale', {})
    .subscribe({
      next: data => {
        console.log(data);
      }
    })
      
  }

  endSale()
  {
    this.http.put<any>(this.baseUrl + 'products/end-sale', {})
    .subscribe(data => {})
  }

}
