import { Routes } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { NewsDetailPage } from './news-detail-page';

export default [
    {
        path: '', component: NewsDetailPage,
        providers: [provideMarkdown()]
    },
] satisfies Routes;