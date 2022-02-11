import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockSportsService {

  constructor() { }
  getAllResults(): Observable<any> {
    const data = {
        f1Results: [
            {
              publicationDate: "May 9, 2020 8:09:03 PM",
              seconds: 5.856,
              tournament: "Silverstone Grand Prix",
              winner: "Lewis Hamilton",
            },
            {
              publicationDate: "May 8, 2020 8:09:03 PM",
              seconds: 7.5,
              tournament: "France Grand Prix",
              winner: "Irina Press",
            }
        ],
        nbaResults: [
          {
            gameNumber: 6,
            looser: "Heat",
            mvp: "Lebron James",
            publicationDate: "May 9, 2020 8:09:03 PM",
            tournament: "NBA playoffs",
            winner: "Lakers",
          },
          {
            gameNumber: 2,
            looser: "Lakers",
            mvp: "Jimmy Butler",
            publicationDate: "May 5, 2020 8:09:03 PM",
            tournament: "NBA playoffs",
            winner: "Heat",
          },
      ],
      tennisResults: [
        {
          looser: "Schwartzman",
          numberOfSets: 3,
          publicationDate: "May 9, 2020 8:09:03 PM",
          tournament: "Roland Garros",
          winner: "Rafael Nadal"
        },
        {
          looser: "Novak Djokovic",
          numberOfSets: 6,
          publicationDate: "May 2, 2020 8:09:03 PM",
          tournament: "US Open",
          winner: "Roger Federer"
        }
    ],
    };
    return of(data); // from(data).pipe(toArray());
}
}
