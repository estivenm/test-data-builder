import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  constructor() {}
  listaPeliculas: Array<Pelicula> = [];

  crearPelicula(pelicula: Pelicula): Array<Pelicula> {
    this.listaPeliculas.push(pelicula);
    return this.listaPeliculas;
  }
}
