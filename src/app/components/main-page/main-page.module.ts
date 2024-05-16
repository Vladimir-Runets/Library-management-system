import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationPanelModule } from '../navigation-panel/navigation-panel.module';
import { MainPageComponent } from './main-page.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NavigationPanelModule,
    RouterOutlet
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }