import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './model/model';
import { FormsModule } from '@angular/forms';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Event_Booking_App_Angular18';
 eventsrv=inject(EventService);
  @ViewChild('model') model: ElementRef |undefined;
  isLoginForm:boolean=false;
  
  userObj: User=new User();

  openPopUP(){
    if(this.model){
      this.model.nativeElement.style.display = 'block';
    }
  }

  closePopUP(){
    if(this.model){
this.model.nativeElement.style.display='none';
    //  this.model.nativeElement.sytle.display='none';
    }
  }

  onRegister(){
    this.eventsrv.registerUser(this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert("User Registered");
      }
    })
  }
}
