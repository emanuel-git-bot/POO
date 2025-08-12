import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/soma/soma.component').then(m => m.SomaComponent)
    }
];
