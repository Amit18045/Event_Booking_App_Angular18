import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { IEvent } from '../../model/model';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [AsyncPipe,CommonModule,RouterLink],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
activeRoute=inject(ActivatedRoute);
eventsrc=inject(EventService);
eventData$: Observable<IEvent>=new Observable<IEvent>;
event$: Observable<IEvent []>=new Observable<IEvent []>;


constructor(){
  this.activeRoute.params.subscribe((res:any)=>{
    this.eventData$ =this.eventsrc.getEventById(res.id);
    this.eventData$.subscribe((res:IEvent)=>{
     this.event$=this.eventsrc.getEventOrganizer(res.organizerId);
    })
  })
}


}
