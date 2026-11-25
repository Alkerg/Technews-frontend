import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { MarkdownComponent } from 'ngx-markdown';
import { NewsDetailSkeleton } from '../../shared/news-detail-skeleton/news-detail-skeleton';

@Component({
  imports: [Navbar, MarkdownComponent, NewsDetailSkeleton],
  selector: 'app-news-detail-page',
  templateUrl: './news-detail-page.html',
})
export class NewsDetailPage {

  newsService = inject(NewsService);
  slug: string | null = null;
  newsData = signal<NewsResponse | null>(null);
  isLoadingNews = signal<boolean>(false);
  protected http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  ngOnInit(){

    this.isLoadingNews.set(true);

    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
    })

    this.newsService.getNewsBySlug(this.slug)?.subscribe({
      next: (data) => {
        this.newsData.set(data)
      },
      error: (err) => console.log(err),
      complete: () => this.isLoadingNews.set(false)
    });
    
  }

}
