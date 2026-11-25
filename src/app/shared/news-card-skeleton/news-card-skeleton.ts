import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'news-card-skeleton',
  templateUrl: './news-card-skeleton.html',
  host: { class: 'block' },
})
export class NewsCardSkeleton {

  readonly summaryLines = ['w-full', 'w-full', 'w-11/12', 'w-3/5'];

}
