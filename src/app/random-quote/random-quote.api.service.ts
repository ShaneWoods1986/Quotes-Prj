import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { QuoteApi } from '../quote/quote.api';
import { HttpHandlingService } from '../http-handling.service';

@Injectable({
    providedIn: 'root'
})
export class RandomQuoteApiService implements QuoteApi {
    constructor(private http: HttpClient, private errorHandler: HttpHandlingService) {}

     getQuote(): Observable<string> {
        return this.http.get<any>('https://type.fit/api/quotes').pipe(
            delay(300),
            map(quotes => {
                let idx: number = Math.floor((quotes.length * Math.random()));
                return `"${quotes[idx].text}"- ${quotes[idx].author ||'Unknown'}"`;
            }),
            catchError(this.errorHandler.handleError('Kanye API Serivce.getQuote', ''))
        );
    }
}