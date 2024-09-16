import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Author, Painting } from '../definitions';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getPaintings(): Painting[] {
    return environment.paintings;
  }

  getPaintingsByAuthors(authors: Author[]): Painting[] {
    var result: Painting[] = [];
    var paintings = this.getPaintings();
    for (var i = 0; i < authors.length; i++) {
      for (var j = 0; j < paintings.length; j++) {
        for (var k = 0; k < paintings[j].authors.length; k++) {
          if (paintings[j].authors[k].id === authors[i].id) result.push(paintings[j])
        }
      }
    }
    return result;
  }
}
