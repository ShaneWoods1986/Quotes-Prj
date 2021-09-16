import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlingService {
  constructor(private toastr: ToastrService) { }


  handleError<T> (operation = 'operation', result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
       
      let errorMessage;
      if (err.error && err.error.message) {
        errorMessage = err.error.message; 
      } else {
        errorMessage = err.message; 
      }
      this.toastr.error(errorMessage, 'An Error Occurred');
      console.error(`Server Returned Code: ${err.status}, error message is ${errorMessage}`); 
      console.error(`HttpErrorResponse`, err); 
       
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
