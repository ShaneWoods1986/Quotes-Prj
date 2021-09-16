import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { QuoteState } from './quote.state';
import { quoteFeatureKey } from './quote.reducer';
import { QuoteViewModel } from '../quote.view.model';

const selectQuoteState: MemoizedSelector<object, QuoteState> = createFeatureSelector<QuoteState>(quoteFeatureKey);

const selectViewModel: MemoizedSelector<object, QuoteViewModel> = createSelector(selectQuoteState, (state: QuoteState) => {
    const vm: QuoteViewModel = {
        quotes: state.quotes.map(qte => qte.quote),
        loading: state.loading
    }
    return vm;
});

interface QuoteSelectors {
    selectViewModel: MemoizedSelector<object, QuoteViewModel>;
}

export const quoteSelectors: QuoteSelectors = {
    selectViewModel
}