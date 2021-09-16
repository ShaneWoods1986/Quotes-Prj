import { NgModule } from '@angular/core';

import { QuoteModule } from '../quote/quote.module';
import { QuoteApi } from '../quote/quote.api';
import { RandomQuoteApiService } from './random-quote.api.service';

@NgModule({
  declarations: [],
  imports: [
    QuoteModule
  ],
  providers: [
      { provide: QuoteApi, useClass: RandomQuoteApiService },
      { provide: 'TITLE', useValue: "Quotations" }
  ]
})
export class RandomQuoteModule { }
