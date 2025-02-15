import { Component, Input } from '@angular/core';
import { Painting } from '../../definitions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-miniature',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './miniature.component.html',
  styleUrl: './miniature.component.scss'
})
export class MiniatureComponent {
  @Input() painting!: Painting;

  getAuthors(): string {
    var result: string[] = [];
    for (var i = 0; i < this.painting.authors.length; i++) {
      result.push(this.painting.authors[i].name);
    }
    return result.join(", ");
  }
}
