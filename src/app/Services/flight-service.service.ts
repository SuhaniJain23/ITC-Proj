import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs'
import {Flights} from '../flights/flight.model'

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

 private object = new BehaviorSubject<Object>('dafault message');
 cast  = this.object.asObservable();
  private url  = "../assets/data/flight.json";
  constructor(private http: HttpClient) { }

 getFlightData(data:object){
this.object.next(data);
 }

  SearchFlightData(): Observable<Flights>{
    return this.http.get<Flights>(this.url);
  }
}
