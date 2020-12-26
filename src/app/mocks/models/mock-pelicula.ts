/**
* Descripcion
* @returns
* @class class
* @author Juan Estiven Mazo Moreno <je.mazo@tcs.com>
* @since 2019-00-00
*/
import { Pelicula } from '../../models/pelicula';

export class MockPelicula {
  private nombre: string;
  private descripcion: string;
  private duracion: number;
  private fechaLanzamiento: Date;

  constructor() {
    this.nombre = 'Dragon Ball Super: Broly';
    this.descripcion = 'La Película Dragon Ball Super: Broly es la vigésima película anime de la franquicia Dragon Ball';
    this.duracion = 120;
    this.fechaLanzamiento = new Date();
  }

  withNombre(nombre: string): MockPelicula {
    this.nombre = nombre;
    return this;
  }

  withDescripcion(descripcion: string): MockPelicula {
    this.descripcion = descripcion;
    return this;
  }

  withDuracion(duracion: number): MockPelicula {
    this.duracion = duracion;
    return this;
  }

  withFechaLanzamiento(fechaLanzamiento: Date): MockPelicula {
    this.fechaLanzamiento = fechaLanzamiento;
    return this;
  }

  build(): Pelicula {
    return new Pelicula(
      this.nombre,
      this.descripcion,
      this.duracion,
      this.fechaLanzamiento
    );
  }

  aMockPelicula(): MockPelicula {
    return new MockPelicula();
  }
}
