import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LanguageSwitcherComponent } from './widgets/language-switcher.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { EditBookModalDialogComponent } from './dialogs/edit-book-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { ImageSelectorComponent } from './inputs/image-selector/image-selector.component';
import { TranslationPipeModule } from '../pipes/translate.pipe.module';

@NgModule({
  declarations: [
    LanguageSwitcherComponent, 
    EditBookModalDialogComponent
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
    ImageSelectorComponent,
    TranslationPipeModule
  ],
  exports: [
    LanguageSwitcherComponent,
    EditBookModalDialogComponent,
  ]
})
export class SharedModule { }