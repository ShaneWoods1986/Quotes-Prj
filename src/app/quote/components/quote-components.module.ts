import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote-component/quote.component';

@NgModule({
  declarations: [
    QuoteComponent
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class QuoteComponentsModule { }
