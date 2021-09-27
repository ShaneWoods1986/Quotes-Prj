import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { QuoteFacadeService } from '../../quote-facade.service';
import { QuoteViewModel } from '../../quote.view.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  constructor(private facadeService: QuoteFacadeService, @Inject('TITLE') public title: string) { }

  vm$: Observable<QuoteViewModel> = this.facadeService.getViewModel();

  getNewQuote(): void {
    this.facadeService.requestNewQuote();
  }

}
