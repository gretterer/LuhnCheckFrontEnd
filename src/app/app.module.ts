import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CardCheckerComponent } from 'src/app/card-checker.component';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardCheckerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
