import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRESPONSE, IEvent, User } from '../model/model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

private https=inject(HttpClient);
private API_URL="https://freeapi.miniprojectideas.com/api/EventBooking/";

getAllEvents(){
  return this.https.get<IAPIRESPONSE>(`${this.API_URL}GetAllEvents`);
}
getEventById(eventId :number){
  return this.https.get<IEvent>(`${this.API_URL}GetEventById?id=${eventId}`).pipe(
    map((item: any)=>{
      return item.data;
    })
  )
}

getEventOrganizer(eventId :number){
  debugger
  return this.https.get<IEvent>(`${this.API_URL}GetEventsByOrganizer?organizerId=${eventId}`).pipe(
    map((item: any)=>{
      debugger
      return item.data;
    })
  )
}


registerUser(user:User){
  debugger
  console.log(user);
return this.https.post(`${this.API_URL}CreateUser`,user);
}
}
