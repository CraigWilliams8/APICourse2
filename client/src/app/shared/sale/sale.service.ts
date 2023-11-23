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
    
    return this.http.post(this.baseUrl + 'products/start-sale', {})
  }

  endSale()
  {
    return this.http.post(this.baseUrl + 'products/end-sale', {})
  }

}
