import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { IAPIRESPONSE, IEvent } from '../../model/model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  eventSrc=inject(EventService);
eventList: IEvent []=[];

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.eventSrc.getAllEvents().subscribe((res:IAPIRESPONSE)=>{
this.eventList=res.data;
    })
  }
}
