import { Injectable } from '@angular/core';
import { map, catchError} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SportsResults } from './models/sports-results.model';
import { Tennis } from './models/tennis.model';
import { NbaResults } from './models/nba-results.model';
import { F1Results } from './models/f1-results.model';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http:HttpClient) { }

  public getAllResults(): Observable<SportsResults> {
    const headers = { 'Authorization': 'Bearer my-tojen' };
    const body = { title: 'Angular POST Request Example' };
    const url = 'https://ancient-wood-1161.getsandbox.com:443/results';
    return this.http.post(url, body, { headers }).
      pipe(
        map((data: any) => {
          const tennisResults: Tennis[] = data.Tennis;
          const nbaResults: NbaResults[] = data.nbaResults;
          const f1Results: F1Results[] = data.f1Results;
          const sportsResults: SportsResults = {
            tennisResults: tennisResults,
            nbaResults: nbaResults,
            f1Results: f1Results
          };

          return sportsResults;
        }), catchError(error => {
          return of(error);
        })
      )
  }
}
