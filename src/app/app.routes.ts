import { Routes } from '@angular/router';

import { PaintingsComponent } from './paintings/paintings.component';
import { PaintingComponent } from './paintings/painting/painting.component';

export const routes: Routes = [
    {
        path: "",
        component: PaintingsComponent
    },
    {
        path: "painting/:id",
        component: PaintingComponent
    }
];
