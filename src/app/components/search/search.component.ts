import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LibraryService } from '../../core/services/library.service';
import { Book } from '../../core/interfaces/book.interface';
import { TranslatorService } from '../../core/services/translator.service';
import { IconDefinition, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true
    }
  ]
})
export class SearchComponent implements ControlValueAccessor {
  searchText: string = "";
  searchResults: Book[] = [];
  magnifier: IconDefinition = faMagnifyingGlass;

  constructor(public libraryService: LibraryService, public translatorService: TranslatorService){}

  onChange!: (value: string) => void;
  onTouched!: () => void;

  searchEngine(text: string) {
    this.searchText = text;
    this.onChange(this.searchText);
  }

  searchBooks(): void {
    if (this.searchText.length >= 2) {
        this.libraryService.getBooks.subscribe((books) => {
          this.searchResults = books
            .filter(
              (book) =>
                book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
                book.author.toLowerCase().includes(this.searchText.toLowerCase())
            )
            .slice(0, 3);
        });
      } else {
        this.searchResults = [];
      }
  }

  openBookPage(book: Book): void {
    console.log(book);
    //this.libraryService.openBookPage(book);
  }

  writeValue(text: string): void {
    this.searchText = text;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}