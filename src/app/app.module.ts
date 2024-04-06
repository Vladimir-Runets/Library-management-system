import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPanelModule } from './components/navigation-panel/navigation-panel.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginPageModule } from './components/login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationPanelModule,
    LoginPageModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }