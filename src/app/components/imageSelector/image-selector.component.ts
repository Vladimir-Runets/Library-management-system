import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import bookCovers from '../../../app/assets/mock/book-covers';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageSelectorComponent),
      multi: true
    }
  ]
})
export class ImageSelectorComponent implements ControlValueAccessor {
  bookCovers: string[] = bookCovers;
  selectedImage!: string;

  onChange!: (value: string) => void;
  onTouched!: () => void;

  selectImage(image: string) {
    this.selectedImage = image;
    this.onChange(this.selectedImage);
  }

  writeValue(image: string): void {
    this.selectedImage = image;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}