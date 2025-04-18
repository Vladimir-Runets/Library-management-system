import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPanelModule } from './components/navigation-panel/navigation-panel.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginPageModule } from './components/login-page/login-page.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdministrationModule } from './components/administration/administration.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { BookReviewModule } from './components/book-review/book-review.module';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationPanelModule,
    LoginPageModule,
    HttpClientModule,
    AdministrationModule,
    DashboardModule,
    MainPageModule,
    BookReviewModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru'
    })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }