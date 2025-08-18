import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'exercicios' },
	{ path: 'soma', loadComponent: () => import('./pages/soma/soma').then(c => c.Soma) },
	{ path: 'exercicios', loadComponent: () => import('./pages/exercicios/exercicios').then(c => c.Exercicios) },
	{ path: '**', redirectTo: 'exercicios' }
];
