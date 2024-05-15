import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LibraryService } from '../../../core/services/library.service';
import { Book } from '../../../core/interfaces/book.interface';
import { IconDefinition, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { map } from 'rxjs';
import { Router } from "@angular/router";
import { TranslationPipeModule } from '../../../pipes/translate.pipe.module';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, BrowserModule, FontAwesomeModule, TranslationPipeModule],
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
  isShowResults: boolean = false;
  searchText: string = "";
  searchResults: Book[] = [];
  magnifier: IconDefinition = faMagnifyingGlass;

  constructor(public libraryService: LibraryService, private router: Router){}

  onChange!: (value: string) => void;
  onTouched!: () => void;

  searchBooks(): void {
    if (this.searchText.length >= 2) {
        this.libraryService.getBooks$.pipe(map((books) => {
          return books.filter(
            (book) =>
              book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
              book.author.toLowerCase().includes(this.searchText.toLowerCase())
          )
          .slice(0, 3);
        })).subscribe((books) => {
          this.searchResults = books;
        });
      } else {
        this.searchResults = [];
      }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
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

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    const clickedElementClass: string | null = target.getAttribute('class');
    if (clickedElementClass?.includes('searchEngine')) {
      this.isShowResults = true;
    } else {
      this.isShowResults = false;
    }
  }
}