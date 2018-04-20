import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DetailsComponent } from './details/details.component';
import { DaysPipe } from './days.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DetailsComponent,
    DaysPipe,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
