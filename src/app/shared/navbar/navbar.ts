import { Component, DOCUMENT, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { dateRangeValidator } from '../validators/daterange.validators';
@Component({
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  private document = inject(DOCUMENT);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  isFilterModalActive = signal<boolean>(false);

  protected filtersForm = new FormGroup(
    {
      category: new FormControl<string | null>(null),
      from: new FormControl<string | null>(null),
      to: new FormControl<string | null>(null),
    },
    { validators: dateRangeValidator },
  );

  constructor() {
    effect((onCleanup) => {
      if (!this.isFilterModalActive()) return;

      this.document.body.classList.add('overflow-hidden');
      onCleanup(() => this.document.body.classList.remove('overflow-hidden'));
    });
  }

  applyFilters() {
    if (this.filtersForm.invalid) return;
    const { category, from, to } = this.filtersForm.value;
    this.router.navigate(['/'], {
      queryParams: { category: category || null, from: from || null, to: to || null },
    });
    this.closeFilterModal();
  }

  clearFilters() {
    this.filtersForm.reset();
    this.router.navigate(['/']);
    this.closeFilterModal();
  }

  openFilterModal() {
    const params = this.route.snapshot.queryParamMap;
    this.filtersForm.setValue({ category: params.get('category') ?? '', from: params.get('from'), to: params.get('to') });
    this.isFilterModalActive.set(true);
  }

  closeFilterModal() {
    this.isFilterModalActive.set(false);
  }

  toggleFilterModal() {
    this.isFilterModalActive.update((active) => !active);
  }
}
