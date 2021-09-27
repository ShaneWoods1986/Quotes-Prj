import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, delay, filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { MergedRoute } from './merged-route';
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

    load$ = createEffect(() => this.actions.pipe(
        ofType(quoteActions.load),
        delay(200),
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
    ));

    navigated$ = createEffect(() => this.actions.pipe(
        ofType<RouterNavigationAction<MergedRoute>>(ROUTER_NAVIGATION),
        filter((action) => {
            const state: MergedRoute = action.payload.routerState;
            return state.url.includes('kanye') || state.url.includes('random');
        }),
        map(() => quoteActions.load())
    )
    );

}
