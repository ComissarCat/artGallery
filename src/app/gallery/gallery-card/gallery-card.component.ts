import { Input, Component } from '@angular/core';
import { Painting } from '../../definitions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.scss'
})
export class GalleryCardComponent {
  @Input() painting!: Painting;

  getAuthors(): string {
    var result: string[] = [];
    for (var i = 0; i < this.painting.authors.length; i++) {
      result.push(this.painting.authors[i].name);
    }
    return result.join(", ");
  }

  getQueryParams(): string {
    return JSON.stringify(this.painting);
  }
}
