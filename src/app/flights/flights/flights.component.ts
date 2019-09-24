import { Component, OnInit } from '@angular/core';
import {Flights} from '../flight.model'
import { FlightServiceService } from 'src/app/Services/flight-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flightsForm1 : FormGroup;
  public min : string = '1';
  public max : string = '100000';
  todaydate:Date = new Date();
  route= null;
   body12 = {
    to: '',
    from: '',
    on : '',
    return: '',
    price : ''
  };
  showList= false;
  Searched;
  constructor(private formBuilder: FormBuilder,
    private flightService : FlightServiceService) { }

    createFlightForm(){
  
      this.flightsForm1 = new  FormGroup({
        From: new FormControl('' ),
        To: new FormControl(''),
        On: new FormControl(''),
        Price: new FormControl(''),
        Return: new FormControl(''),
      });
    }

  ngOnInit() {
  
    this.createFlightForm();
    this.flightService.SearchFlightData().subscribe((datac)=>{
      this.Searched  = datac;
      
    });
  }

  onChange(route){
    this.showList = false;
    this.route = route;
    this.flightsForm1.reset();
  }

  onSubmit(value){
    this.body12 = {
      to: this.flightsForm1.value.To,
      from: this.flightsForm1.value.From,
      on : this.flightsForm1.value.On,
      return: this.flightsForm1.value.Return,
      price : this.flightsForm1.value.Price
    };


  var oneWay = this.Searched.filter((d)=>{
    // @ts-ignore
    const model4 =  new Date(this.body12.on).toDateString("d mm yyyy");
    const model5  = new Date(d.on).toDateString(); 
   return d.to == this.body12.to && d.from == this.body12.from && parseInt(d.price) <= parseInt(this.body12.price) 
   && model5 == model4;
  });

if(this.route == 'Two'){
  console.log('verifyyyy')
  var twoWay = this.Searched.filter((d)=>{
    // @ts-ignore
    const model4 =  new Date(this.body12.return).toDateString("d mm yyyy");
    const model5  = new Date(d.on).toDateString(); 
   return d.to == this.body12.from && d.from == this.body12.to && parseInt(d.price) <= parseInt(this.body12.price) 
   && model5 == model4;
  });
}
const routesObj = {
  oneWayTrip: oneWay,
  twoWayTrip: twoWay
}

  this.showList = true;
  this.flightService.getFlightData(routesObj);

  }

}
