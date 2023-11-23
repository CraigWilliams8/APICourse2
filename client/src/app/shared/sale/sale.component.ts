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

  toggle? : boolean ;
  shopComp? : ShopComponent;
  constructor(private saleService: SaleService){}  

  ngOnInit(): void{
    this.toggle = true;
  }
  startSale() {
    this.saleService.startSale();
  }

  endSale() {
    this.saleService.endSale();
  }
  setSale(bool: boolean){
    if(bool) {
      localStorage.setItem('isSaleOn', 'true');
      this.startSale();
      this.toggle = false;
    }
    else {
      localStorage.setItem('isSaleOn', 'false');
      this.endSale();
      this.toggle = true;
    }
  }
}
