import { Component } from '@angular/core';
import { PaintingService } from './painting.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-paintings',
  standalone: true,
  imports: [RouterLink],
  providers: [PaintingService, Router],
  templateUrl: './paintings.component.html',
  styleUrl: './paintings.component.scss'
})
export class PaintingsComponent {
  constructor(private paintingService: PaintingService, private router: Router) { }

  getPaintings() {
    return this.paintingService.getPaintings();
  }

  getAuthors(id: number[]) {
    var result: string[] = [];
    for (var i of id) {
      result.push(this.paintingService.getAuthor(i)[0].name);
    }
    return result.join(", ");
  }
}
