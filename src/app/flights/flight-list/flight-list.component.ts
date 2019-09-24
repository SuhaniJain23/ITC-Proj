import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from 'src/app/Services/flight-service.service';

@Component({
  selector: 'flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  SearchedFlight ;
  OneWayTrip;
  TwoWayTrip;
  constructor( private flightService : FlightServiceService) { }

  ngOnInit() {
    this.flightService.cast.subscribe((data)=>{
      
      this.SearchedFlight = data;
this.OneWayTrip = this.SearchedFlight.oneWayTrip;
this.TwoWayTrip = this.SearchedFlight.twoWayTrip;
      console.log('dataaaa', this.SearchedFlight );
    });
    
  }



}
