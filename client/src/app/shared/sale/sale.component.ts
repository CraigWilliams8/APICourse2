import { Component } from '@angular/core';
import { SaleService } from './sale.service';
import { Product } from '../models/product';
import { ShopComponent } from 'src/app/shop/shop.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {

  constructor(private saleService: SaleService){}  
  
  ngOnInit(): void{
  }
  startSale() {
    this.saleService.startSale();
  }

  endSale() {
    this.saleService.endSale();
  }
  setSale(bool: boolean){
    if(bool) {
      localStorage.setItem('isSaleOn', 'false');
      this.startSale();

    }
    else {
      localStorage.setItem('isSaleOn', 'true');
      this.endSale();

    }
  }
  isSaleOn(): boolean{
    const x = localStorage.getItem('isSaleOn');
    console.log(x);
    if(localStorage.getItem('isSaleOn') == 'true') return true;
    else return false;
  }
}
