import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { QuoteApi } from '../quote/quote.api';
import { HttpHandlingService } from '../http-handling.service';

@Injectable({
    providedIn: 'root'
})
export class KanyeApiService implements QuoteApi {
    constructor(private http: HttpClient, private errorHandler: HttpHandlingService) {}

     getQuote(): Observable<string> {
        return this.http.get<any>('https://api.kanye.rest/').pipe(
            delay(300),
            map(response => response.quote),
            catchError(this.errorHandler.handleError('Kanye API Serivce.getQuote', ''))
        );
    }
}