export class Pelicula {
  nombre: string;
  descripcion: string;
  duracion: number;
  fechaLanzamiento: Date;

  constructor(
    nombre: string,
    descripcion: string,
    duracion: number,
    fechaLanzamiento: Date
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.fechaLanzamiento =  fechaLanzamiento ? fechaLanzamiento : new Date(Date.now());
  }
}
