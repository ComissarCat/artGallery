import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaintingsComponent } from './paintings/paintings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaintingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'artGallery';
}
