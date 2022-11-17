import { Component, OnInit } from '@angular/core';
import { SportsService } from './sports.service';
import { SportsResults } from './models/sports-results.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sports-app';

  results: SportsResults = {
    tennisResults: [],
    f1Results: [],
    nbaResults: []
  };
  constructor(private sportsService: SportsService) {}

  ngOnInit(): void {
    this.getSportResults();
  }
  getSportResults() {
    // service api call to GET sport results
    this.sportsService.getAllResults().subscribe((data: SportsResults) => {
      this.results = data;
    });
    
  }
}
