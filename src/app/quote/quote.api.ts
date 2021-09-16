import { Observable } from 'rxjs';

export abstract class QuoteApi {
    public abstract getQuote(): Observable<string>;
}