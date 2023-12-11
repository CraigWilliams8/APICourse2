using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class CustomerBasket
    {

        public string Id {get; set;}

        public List<BasketItem> Items {get; set;}
    
        public CustomerBasket(string id)
        {
            Id= id;
        }

        public CustomerBasket()
        {
            Items = new List<BasketItem>();
        }
    }

}