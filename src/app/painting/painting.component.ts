import { Component } from '@angular/core';
import { Painting } from '../definitions';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GalleryService } from '../gallery/gallery.service';
import { MiniatureComponent } from './miniature/miniature.component';

@Component({
  selector: 'app-painting',
  standalone: true,
  imports: [MiniatureComponent, RouterLink],
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.scss'
})
export class PaintingComponent {
  id: number = 0;
  params: string = '';
  painting!: Painting;
  otherPaintings!: Painting[];
  constructor(private route: ActivatedRoute, private galleryService: GalleryService) {
    route.params.subscribe(params => this.id = Number(params["id"]));
    this.painting = this.getPainting(this.id);
    this.otherPaintings = this.getOtherPaintings();
  }

  getPainting(id: number): Painting {
    return this.galleryService.getPaintingById(id);
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

  changeMainPainting(id: number) {
    this.id = id;
    this.painting = this.getPainting(this.id);
    this.otherPaintings = this.getOtherPaintings();
  }
}
