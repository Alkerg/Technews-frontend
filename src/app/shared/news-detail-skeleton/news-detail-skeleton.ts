import { Component } from '@angular/core';

type SkeletonBlock =
  | { type: 'paragraph'; lines: string[] }
  | { type: 'heading' }
  | { type: 'image' };

@Component({
  imports: [],
  selector: 'news-detail-skeleton',
  templateUrl: './news-detail-skeleton.html',
})
export class NewsDetailSkeleton {
  protected readonly titleLines = ['w-full', 'w-3/4'];

  protected readonly body: SkeletonBlock[] = [
    { type: 'paragraph', lines: ['w-full', 'w-full', 'w-11/12', 'w-2/3'] },
    { type: 'image' },
    { type: 'paragraph', lines: ['w-full', 'w-full', 'w-10/12', 'w-full', 'w-1/2'] },
    { type: 'heading' },
    { type: 'paragraph', lines: ['w-full', 'w-11/12', 'w-full', 'w-3/5'] },
    { type: 'paragraph', lines: ['w-full', 'w-full', 'w-4/5'] },
  ];
}
