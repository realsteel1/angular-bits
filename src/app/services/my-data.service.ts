import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay, retryWhen, take } from 'rxjs/operators';

@Injectable()
export class MyService {
  private apiUrl = 'your-api-url-here';

  constructor(private http: HttpClient) {}

  makeHttpPostWithRetries(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload).pipe(
      retryWhen(errors => errors.pipe(
        delay(1000), // Delay for 1 second before each retry
        take(3),     // Retry 3 times
      )),
      catchError(error => {
        // Handle the error or throw it if necessary
        return of(error);
      })
    );
  }
}
