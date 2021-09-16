import { NgModule } from '@angular/core';

import { QuoteComponentsModule } from './components/quote-components.module';
import { QuoteStoreModule } from './store/quote-store.module';

@NgModule({
  declarations: [
  ],
  imports: [
    QuoteComponentsModule,
    QuoteStoreModule
  ]
})
export class QuoteModule { }
