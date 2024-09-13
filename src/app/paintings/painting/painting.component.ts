import { Component } from '@angular/core';
import { PaintingService } from '../painting.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-painting',
  standalone: true,
  imports: [RouterLink],
  providers: [PaintingService, Router],
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.scss'
})
export class PaintingComponent {

  id: number;

  constructor(private paintingService: PaintingService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params["id"];
  }

  getPainting(id: number) {
    return this.paintingService.getPaintingById(id)[0];
  }

  getAuthors(id: number[]) {
    var result: string[] = [];
    for (var i of id) {
      result.push(this.paintingService.getAuthor(i)[0].name);
    }
    return result.join(", ");
  }
}
