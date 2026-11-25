import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
