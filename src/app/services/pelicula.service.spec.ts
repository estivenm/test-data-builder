import { MockPelicula } from '../mocks/models/mock-pelicula';
import { TestBed } from '@angular/core/testing';
import { PeliculaService } from './pelicula-service.service';
import { Pelicula } from '../models/pelicula';

describe('PeliculaService', () => {

  let service: PeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculaService]
    });
    service = TestBed.get(PeliculaService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe Crear una pelicula', () => {

    // Arrange: En esta parte de preparan todas precondiciones para el caso de prueba.
    const mockPelicula: Pelicula = new MockPelicula().withNombre('Super Man').build();

    // Act: Se ejecuta el método o objeto el cual se quiere probar.
    const  responseExpect =  service.crearPelicula(mockPelicula);

    // Assert: Verificar que el resultado obtenido sea el esperado.
    expect(responseExpect[0]).toEqual(mockPelicula);
  });

});
