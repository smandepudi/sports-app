import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsResultsListComponent } from '../sports-results-list/sports-results-list.component';

import { MockSportsService } from '.././mocks/mock-sports.service';


import { SportsService } from '../sports.service';


@NgModule({
  declarations: [ SportsResultsListComponent ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: SportsService, useClass: MockSportsService }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MockCoreServicesModule { }
