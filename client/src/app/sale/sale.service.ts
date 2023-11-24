import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from 'src/app/shop/shop.service';
import { ShopComponent } from 'src/app/shop/shop.component';


@Injectable({
  providedIn: 'root'
})
export class SaleService {
  baseUrl = 'https://localhost:5001/api/'
  shopService?: ShopService
  shopComp? : ShopComponent
  constructor(private http: HttpClient) { }

  startSale() 
  {
    this.http.put<any>(this.baseUrl + 'products/start-sale', {})
    .subscribe({
      next: () => window.location.reload()
    })
  }

  endSale()
  {
    this.http.put<Product>(this.baseUrl + 'products/end-sale', {})
    .subscribe({
      next: () => window.location.reload()
    })
  }

}
