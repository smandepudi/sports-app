import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SportsService } from './sports.service';
import { SportsResultsListComponent } from './sports-results-list/sports-results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SportsResultsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [SportsService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
