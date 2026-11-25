import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'news-card',
  templateUrl: './news-card.html',
  host: { class: 'block' },
})
export class NewsCard {
  //protected http = inject(HttpClient);
  newsData = input.required<MinimalNewsResponse>();
  index = input(0);
  protected imageUrl = computed(() =>
    this.newsData().mainImage?.url.replace(/w_\d+/, 'w_640') ?? null,
  );
}
