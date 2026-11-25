import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const dateRangeValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const from = group.get('from')?.value;
  const to = group.get('to')?.value;

  if (!from || !to) return null;

  return from <= to ? null : { dateRange: true };
};