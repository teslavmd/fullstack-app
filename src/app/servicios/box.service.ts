import { Inject, Injectable } from '@angular/core';
import { Box } from '../modelos/box.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoxService {


  url : string = environment.url;

   list : Box[] = [
    { id : "1234512",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cats"
    },
    { id : "145",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/dogs"
    },
    { id : "17567",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cars"
    },
    { id : "13456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/music"
    },
    { id : "1123",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/animals"
    },
    { id : "1456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/art"
    },
    { id : "1345",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/fashion"
    },
    { id : "11234",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/tech"
    },
    { id : "1234512",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cats"
    },
    { id : "145",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/dogs"
    },
    { id : "17567",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cars"
    },
    { id : "13456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/music"
    },
    { id : "1123",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/animals"
    },
    { id : "1456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/art"
    },
    { id : "1345",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/fashion"
    },
    { id : "11234",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/tech"
    },
    { id : "1234512",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cats"
    },
    { id : "145",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/dogs"
    },
    { id : "17567",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cars"
    },
    { id : "13456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/music"
    },
    { id : "1123",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/animals"
    },
    { id : "1456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/art"
    },
    { id : "1345",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/fashion"
    },
    { id : "11234",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/tech"
    },
    { id : "1234512",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cats"
    },
    { id : "145",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/dogs"
    },
    { id : "17567",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/cars"
    },
    { id : "13456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/music"
    },
    { id : "1123",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/animals"
    },
    { id : "1456",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/art"
    },
    { id : "1345",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/fashion"
    },
    { id : "11234",
      titulo : "JUAN MARTIN",
      fecha : "",
      descripcion : "NADA ESO QUEIRO SABER DE JUAN MARTIN",
      foto : "https://loremflickr.com/360/360/tech"
    },
  ];

  constructor(
    private http : HttpClient,
  ) { }

  getBoxesOff(){
    return this.list;
  }

  getBoxes() : Observable<Box[]>{
    return this.http.get<Box[]>(`${this.url}/box`);
  }

  searchBox(id : string) : Observable<Box>{
    return this.http.get<Box>(`${this.url}/box/${id}`)
  }


  addBox(box : Box) : Observable<Box>{
    return this.http.post<Box>(`${this.url}/box`, box);
  }

}
