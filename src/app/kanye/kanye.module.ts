import { NgModule } from '@angular/core';

import { QuoteModule } from '../quote/quote.module';
import { QuoteApi } from '../quote/quote.api';
import { KanyeApiService } from './kanye.api.service';

@NgModule({
  declarations: [],
  imports: [
    QuoteModule
  ],
  providers: [
      { provide: QuoteApi, useClass: KanyeApiService },
      { provide: 'TITLE', useValue: "Kanye's Wisdom" }
  ]
})
export class KanyeModule { }
