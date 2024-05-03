import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ImageSelectorComponent } from './image-selector.component';

@NgModule({
  declarations: [
    ImageSelectorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    ImageSelectorComponent
  ]
})
export class ImageSelectorModule { }