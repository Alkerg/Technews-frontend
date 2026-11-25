import { Component, computed, inject, signal } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsCard } from './news-card/news-card';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { NewsCardSkeleton } from '../../shared/news-card-skeleton/news-card-skeleton';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  imports: [NewsCard, Navbar, Footer, NewsCardSkeleton, RouterLink],
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
})
export class LandingPage {

  newsService = inject(NewsService);
  route = inject(ActivatedRoute);
  protected readonly pageSize = 9;
  protected pagedNews = signal<PagedNewsResponse | null>(null);
  protected lastNews = computed(() =>
    (this.pagedNews()?.items ?? []).filter((n) => n.title?.trim() && n.slug),
  );
  currentDate = '2026-11-24'; 
  protected skeletons = Array.from({length:9});
  protected isLoadingNews = signal<boolean>(false);

  constructor(){
    this.route.queryParamMap.pipe(
      map((p): NewsFilters => ({
        category: p.get('category'),
        from: p.get('from'),
        to: p.get('to'),
        page: Math.max(1, Number(p.get('page')) || 1),
        pageSize: this.pageSize,
      })),
      tap(() => this.isLoadingNews.set(true)),
      switchMap((filters) =>
        this.newsService.getNewsByMultipleFilters(filters).pipe(catchError(() => of(null))),
      ),
      takeUntilDestroyed(),
    ).subscribe((paged) => {
      this.pagedNews.set(paged);
      this.isLoadingNews.set(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }




}
