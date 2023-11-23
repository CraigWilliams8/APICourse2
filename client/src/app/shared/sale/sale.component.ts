import { Component } from '@angular/core';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {
  constructor(private saleService: SaleService){}  

  startSale() {
    this.saleService.startSale();
  }

  endSale() {
    this.saleService.endSale();

  }
  setSale(bool: boolean){
    if(bool) {
      localStorage.setItem('isSaleOn', 'true');
    }
    else {
      localStorage.setItem('isSaleOn', 'false');
    }
  }
}
