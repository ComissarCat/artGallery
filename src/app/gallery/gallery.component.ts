import { Component } from '@angular/core';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { GalleryService } from './gallery.service';
import { Painting } from '../definitions';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  constructor(private galleryService: GalleryService) { }

  getPaintings(): Painting[] {
    return this.galleryService.getPaintings();
  }
}
