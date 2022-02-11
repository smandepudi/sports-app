import { Tennis } from './tennis.model';
import { F1Results } from './f1-results.model';
import { NbaResults } from './nba-results.model';


export interface SportsResults {
    tennisResults: Tennis[];
    f1Results: F1Results[];
    nbaResults: NbaResults[];
}
