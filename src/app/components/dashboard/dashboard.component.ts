import { Component } from '@angular/core';
import books from '../../assets/mock/books';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  books = books;
}
