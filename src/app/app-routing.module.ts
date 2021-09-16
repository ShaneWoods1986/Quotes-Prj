import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/kanye', pathMatch: 'full' },
  { path: 'kanye',
   loadChildren: () => import('./kanye/kanye.module').then((mod) => mod.KanyeModule)
   },
   { path: 'random',
   loadChildren: () => import('./random-quote/random-quote.module').then((mod) => mod.RandomQuoteModule)
  },
  { path: '**', redirectTo: '/kanye', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
