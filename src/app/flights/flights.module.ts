import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights/flights.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FlightListComponent } from './flight-list/flight-list.component';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatDatepickerModule, MatFormFieldModule} from '@angular/material';



@NgModule({
  declarations: [FlightsComponent, FlightListComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MatRadioModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
    
  ],providers: [
    MatNativeDateModule,
],
 
})
export class FlightsModule { }
