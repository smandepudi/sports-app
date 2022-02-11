import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SportType } from '../enums/sport-type.enum';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SportsResultsListComponent } from './sports-results-list.component';

import { MockSportsService } from '.././mocks/mock-sports.service';


import { SportsService } from '../sports.service';

describe('SportsResultsListComponent', () => {
  let component: SportsResultsListComponent;
  let fixture: ComponentFixture<SportsResultsListComponent>;
  let mockSportsS: any, mockSportsDataS;
  let resultsView: HTMLElement;

  beforeEach(waitForAsync(() => {
    mockSportsS = jasmine.createSpyObj(['getAllResults']);
    mockSportsDataS = new MockSportsService();
    mockSportsDataS.getAllResults().subscribe(success => {
      mockSportsS = success; // fake date
    });
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SportsResultsListComponent ],
      providers: [
        { provide: SportsService, useValue: mockSportsS }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all Tennis results', () => {
    component.selectedSport = SportType.tennisResults;
    component.tennisResultsToDisplay = mockSportsS.tennisResults;
    fixture.detectChanges();
    const f1Element = fixture.nativeElement.querySelector('.f1Results');
    const tennisHTMLElement = fixture.nativeElement.querySelector('.tennisResults');
    const nbaElement = fixture.nativeElement.querySelector('.nbaResults');
    expect(tennisHTMLElement).toBeTruthy();
    expect(nbaElement).toBeFalsy();
    expect(f1Element).toBeFalsy();
  });

  it('should show all NBA results', () => {
    component.selectedSport = SportType.nbaResults;
    component.nbaResultsToDisplay = mockSportsS.nbaResults;
    fixture.detectChanges();
    const f1Element = fixture.nativeElement.querySelector('.f1Results');
    const tennisHTMLElement = fixture.nativeElement.querySelector('.tennisResults');
    const nbaElement = fixture.nativeElement.querySelector('.nbaResults');
    expect(nbaElement).toBeTruthy();
    expect(f1Element).toBeFalsy();
    expect(tennisHTMLElement).toBeFalsy();
  });

  it('should show all F1 results', () => {
    component.selectedSport = SportType.f1Results;
    component.f1ResultsToDisplay = mockSportsS.f1Results;
    fixture.detectChanges();
    const f1Element = fixture.nativeElement.querySelector('.f1Results');
    const tennisHTMLElement = fixture.nativeElement.querySelector('.tennisResults');
    const nbaElement = fixture.nativeElement.querySelector('.nbaResults');
    expect(f1Element).toBeTruthy();
    expect(tennisHTMLElement).toBeFalsy();
    expect(nbaElement).toBeFalsy();
  });

  it('should show all sports Tennis, NBA, F1 results', () => {
    component.selectedSport = SportType.allResults;
    component.tennisResultsToDisplay = mockSportsS.tennisResults;
    component.nbaResultsToDisplay = mockSportsS.nbaResults;
    component.f1ResultsToDisplay = mockSportsS.f1Results;
    fixture.detectChanges();
    const tennisHTMLElement = fixture.nativeElement.querySelector('.tennisResults');
    const nbaElement = fixture.nativeElement.querySelector('.nbaResults');
    const f1Element = fixture.nativeElement.querySelector('.f1Results');

    expect(tennisHTMLElement).toBeTruthy();
    expect(nbaElement).toBeTruthy();
    expect(f1Element).toBeTruthy();
  });

});
