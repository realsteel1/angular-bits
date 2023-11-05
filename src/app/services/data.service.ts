import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, defaultIfEmpty, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<string[]> {
    return this.http.get<string[]>('your-api-endpoint').pipe(
      map((data) => {
        if (data.length === 0) {
          throw new Error('Empty response');
        }
        return data;
      }),
      catchError(() => []),
      defaultIfEmpty(['Default Value'])
    );
  }
}
