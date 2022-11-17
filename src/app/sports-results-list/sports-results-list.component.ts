import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SportType } from '../enums/sport-type.enum';
import { F1Results } from '../models/f1-results.model';
import { NbaResults } from '../models/nba-results.model';
import { Tennis } from '../models/tennis.model';

@Component({
  selector: 'app-sports-results-list',
  templateUrl: './sports-results-list.component.html',
  styleUrls: ['./sports-results-list.component.scss']
})
export class SportsResultsListComponent implements OnInit {

  @Input() results: any;
  resultsToDisplay: any;
  sportOptions: string[] = [];
  sportTypeKeyEnum = SportType;
  tennisResultsToDisplay: Tennis[] = [];
  nbaResultsToDisplay: NbaResults[] = [];
  f1ResultsToDisplay: F1Results[] = [];
  selectedSport = this.sportTypeKeyEnum.allResults; // to hold the selection from the dropdown

  constructor() { 
    this.sportOptions = Object.values(this.sportTypeKeyEnum); // using the values to bind it to the dropdown Tennis, F1, NBA etc
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['results']) {
      this.resultsToDisplay = (changes['results'].currentValue != null) ? (changes['results'].currentValue) : ''; // all results
      this.tennisResultsToDisplay = (changes['results'].currentValue != null) ? this.sortResults((changes['results'].currentValue.tennisResults)) : ''; // tennis
      this.nbaResultsToDisplay = (changes['results'].currentValue != null) ? this.sortResults((changes['results'].currentValue.nbaResults)) : ''; // nba
      this.f1ResultsToDisplay = (changes['results'].currentValue != null) ? this.sortResults((changes['results'].currentValue.f1Results)) : ''; // F1
    }
  }

  // sorting sport results with in each group in reverse chronological order
  sortResults(resultsArr: any): any {
    return resultsArr.sort((d1: any, d2: any) => new Date(d2.publicationDate).getDate() - new Date(d1.publicationDate).getDate());
  }

  // update the selected sport based on the dropdown selection
  updateSportSelection(e: any){
    this.selectedSport = e.target.value;
  }

}
