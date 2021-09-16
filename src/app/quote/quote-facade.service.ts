import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { quoteSelectors } from './store/quote.selector';
import { quoteActions } from './store/quote.actions';
import { QuoteViewModel } from './quote.view.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteFacadeService {
  constructor(private store$: Store) { }

  getViewModel(): Observable<QuoteViewModel> {
    return this.store$.select(quoteSelectors.selectViewModel);
  }

  requestNewQuote(): void {
    this.store$.dispatch(quoteActions.load());
  }
}
