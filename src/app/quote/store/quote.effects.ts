import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { QuoteApi } from '../quote.api';
import { quoteActions } from './quote.actions';

@Injectable({
    providedIn: 'root'
})
export class QuoteEffects {
    constructor(private actions: Actions,
                private apiService: QuoteApi,
                private toastr: ToastrService
                ) {}

    initialLoad$ = createEffect(() => this.actions.pipe(
        ofType(quoteActions.load),
        mergeMap(() => this.apiService.getQuote()
                 .pipe(
                     tap(()=> {
                         this.toastr.clear();
                         const num = Math.floor(Math.random() * 10);
                         if (num < 3) {
                             throw `Error for throwing ${num}`;
                         }
                     }),
                     map(quote => quoteActions.add({ quote })),
                     catchError((message) => {
                         this.toastr.error(message, 'An Error Occurred');
                         return of(quoteActions.error())
                     })
                 ))
    ))
}
