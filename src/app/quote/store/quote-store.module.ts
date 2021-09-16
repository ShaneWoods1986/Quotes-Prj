import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { quoteReducer, quoteFeatureKey } from './quote.reducer';
import { QuoteEffects } from './quote.effects';

@NgModule({
  declarations: [
  ],
  imports: [
    StoreModule.forFeature(quoteFeatureKey, quoteReducer),
    EffectsModule.forFeature([QuoteEffects]),
  ]
})
export class QuoteStoreModule { }
