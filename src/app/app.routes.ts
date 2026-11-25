import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
    {
        path: '',
        component: LandingPage,
    },
    {
        path: 'news/:slug',
        loadChildren: () => import('./pages/news-detail-page/news-detail.routes')
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage)
    }
];
