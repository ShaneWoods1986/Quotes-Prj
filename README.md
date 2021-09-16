# QuoteExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notes
The aim is to demonstrate good structure using NgRx for everything, with lazy loaded routes, abstracted apis which can be reused differently with the same component.

Two routes- http://localhost:4200/kanye, which delivers a Kanye West quote on clicking the button using only Ngrx.

http://localhost:4200/random uses the same module with the UI and store, but injects a different api and Title.

In order to test error handling, 30% of the time an error is thrown, opening a toast

TODO:
Route effects
