import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PaintingComponent } from './painting/painting.component';

export const routes: Routes = [
    { path: "", component: GalleryComponent },
    { path: "painting/:id", component: PaintingComponent },
];
