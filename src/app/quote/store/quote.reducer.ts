import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';

import { quoteActions } from './quote.actions';
import { initialState, QuoteState } from './quote.state';


export const quoteReducer = createReducer(
    initialState,
    on(quoteActions.error, (state: QuoteState, {}) => {
        return updateLoading(state, false);
    }),
    on(quoteActions.load, (state: QuoteState, {}) => {
        return updateLoading(state, true);
    }),
    on(quoteActions.add, (state: QuoteState, {quote}) => {
        return addQuote(state, quote);
    }),
)

const updateLoading = (state: QuoteState, loading: boolean): QuoteState => {
  return produce(state, (draftState) => {
      draftState.loading = loading;
  });
};

const addQuote = (state: QuoteState, quote: string): QuoteState => {
    return produce(state, (draftState) => {
        draftState.loading = false;

        if (!!quote && !state.quotes.find(qt => qt.quote === quote)) {
            draftState.quotes = [...state.quotes, {quote, added: new Date()}];
        }
    });
};

export const quoteFeatureKey = 'quoteList';