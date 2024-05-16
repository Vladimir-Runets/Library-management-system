import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LanguageSwitcherComponent } from './widgets/language-switcher.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalWindowDialogComponent } from './dialogs/modal-window.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { ImageSelectorModule } from '../components/imageSelector/image-selector.module';

@NgModule({
  declarations: [
    LanguageSwitcherComponent, 
    ModalWindowDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    FontAwesomeModule,
    MatMenuModule,
    ImageSelectorModule
  ],
  exports: [
    LanguageSwitcherComponent,
    ModalWindowDialogComponent
  ]
})
export class SharedModule { }