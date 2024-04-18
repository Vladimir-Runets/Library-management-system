import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdministrationComponent } from './administration.component';
import { NavigationPanelModule } from '../navigation-panel/navigation-panel.module';

@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NavigationPanelModule
  ],
  exports: [
    AdministrationComponent
  ]
})
export class AdministrationModule { }