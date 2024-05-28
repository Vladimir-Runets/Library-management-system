import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdministrationComponent } from './administration.component';
import { NavigationPanelModule } from '../navigation-panel/navigation-panel.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { TranslationPipeModule } from '../../pipes/translate.pipe.module';

@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NavigationPanelModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    SharedModule,
    FontAwesomeModule,
    MatInputModule,
    TranslationPipeModule
  ],
  exports: [
    AdministrationComponent
  ]
})
export class AdministrationModule { }