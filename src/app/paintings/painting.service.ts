import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  constructor() { }

  getPaintings() {
    return environment.paintings;
  }

  getPaintingById(id: number) {
    return environment.paintings.filter(p => p.id === id);
  }

  getPaintingsByAuthor(author: number) {
    return environment.paintings.filter(p => p.authors.includes(author));
  }

  getAuthor(id: number) {
    return environment.authors.filter(a => a.id === id);
  }

  getPlace(id: number) {
    return environment.places.filter(p => p.id === id);
  }
}
