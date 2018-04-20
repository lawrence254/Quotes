import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
