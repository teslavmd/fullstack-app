import { Inject, Injectable } from '@angular/core';
import { Box } from '../modelos/box.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoxService {



  list : Box[] = [
    { id : 1,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/fashion"
    },
    { id : 2,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/people"
    },
    { id : 3,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/food"
    },
    { id : 4,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/sport"
    },
    { id : 5,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/nature"
    },
    { id : 6,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cats"
    },
    { id : 7,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/animals"
    },
    { id : 8,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/nightlife"
    },
    { id : 9,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/transport"
    },
    { id : 10,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/city"
    },
    { id : 11,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/animals"
    },
    { id : 12,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/fashion"
    },
    { id : 13,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/technics"
    },
    { id : 14,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/business"
    },
    { id : 15,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/animals"
    },
    { id : 16,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/city"
    },
    { id : 17,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360"
    },
    { id : 18,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cats"
    },
    { id : 19,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/dogs"
    },
    { id : 20,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/"
    },
    { id : 21,
      titulo : "JUAN MARTIN",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360"
    },
  ];

  constructor(
    private http : HttpClient,
  ) { }

  getBoxes() : Box[]{
    return this.list;
  }

  searchBox(id : number) : any{ 
    let box;
    this.list.forEach( el => {
      if(id === el.id){
        console.log(el);
        box = el;
      }
    })
    return box
  }


  addBox(box : Box){
    this.list.push(box)
  }

}
