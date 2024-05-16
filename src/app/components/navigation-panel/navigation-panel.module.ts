import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationPanelComponent } from './navigation-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from '../../shared/inputs/search/search.component';
import { TranslationPipeModule } from '../../pipes/translate.pipe.module';

@NgModule({
  declarations: [
    NavigationPanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    SharedModule,
    SearchComponent,
    TranslationPipeModule
  ],
  exports: [
    NavigationPanelComponent
  ]
})
export class NavigationPanelModule {}