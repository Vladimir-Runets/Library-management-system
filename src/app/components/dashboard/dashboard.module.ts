import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BookModule } from '../book/book.module';
import { DashboardComponent } from './dashboard.component';
import { NavigationPanelModule } from '../navigation-panel/navigation-panel.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BookModule,
    NavigationPanelModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }