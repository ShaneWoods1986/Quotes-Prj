import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { QuoteFacadeService } from '../../quote-facade.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy {
  constructor(private facadeService: QuoteFacadeService, @Inject('TITLE') public title: string) { }

  private subscription: Subscription = new Subscription;
  allQuotes: string[] = [];
  loadingResults: boolean = false;

  ngOnInit(): void {
    this.getNewQuote();
    const subs = this.facadeService.getViewModel().subscribe(response => {
      this.allQuotes = response.quotes;
      this.loadingResults = response.loading;
    });
    this.subscription.add(subs);
  }

  getNewQuote(): void {
    this.facadeService.requestNewQuote();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
