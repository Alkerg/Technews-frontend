import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  imports: [Navbar, Footer, RouterLink],
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.html',
})
export class NotFoundPage {}
