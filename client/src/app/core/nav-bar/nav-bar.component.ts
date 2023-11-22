import { Component } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { BasketItem } from 'src/app/shared/models/basket';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  sale?: boolean;
  constructor(public basketService: BasketService) {}

  getCount(items: BasketItem[]){
      return items.reduce((sum, item) => sum + item.quantity, 0) 
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
