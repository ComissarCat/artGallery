import { Component } from '@angular/core';
import { Painting } from '../definitions';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GalleryService } from '../gallery/gallery.service';
import { MiniatureComponent } from './miniature/miniature.component';

@Component({
  selector: 'app-painting',
  standalone: true,
  imports: [MiniatureComponent, RouterLink],
  providers: [GalleryService],
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.scss'
})
export class PaintingComponent {
  id: number = 0;
  params: string = '';
  painting: Painting = {
    id: 0,
    file: '',
    name: '',
    authors: [],
    year: '',
    place: {
      id: 0,
      name: ''
    }
  };

  constructor(private route: ActivatedRoute, private galleryService: GalleryService) {
    route.params.subscribe(params => this.id = params["id"]);
    route.queryParams.subscribe(params => this.params = params["painting"]);
    this.painting = JSON.parse(this.params);
  }

  getAuthors(): string {
    var result: string[] = [];
    for (var i = 0; i < this.painting.authors.length; i++) {
      result.push(this.painting.authors[i].name);
    }
    return result.join(", ");
  }

  getOtherPaintings(): Painting[] {
    return this.galleryService.getPaintingsByAuthors(this.painting.authors).filter(p => p.id != this.painting.id);
  }
}
