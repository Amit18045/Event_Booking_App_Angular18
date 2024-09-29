export interface IAPIRESPONSE{
    message:string,
    result:boolean,
    data:any,
}
export interface IEvent {
    eventId: number,
    eventName: string,
    startDate: any,
    startTime: string,
    endDate: any,
    organizerName: string,
    userId: number,
    price: number,
    location: string,
    imageUrl: string,
    description:string,
    organizerId:number,
  }
  export class User {
    UserId: number;
    Name: string;
    Email: string;
    Password: string;
    ContactNo: string;
    Role: string;

    constructor(){
        this.ContactNo='',
        this.Email='',
        this.Name='',
        this.Password='',
        this.Role='',
        this.UserId=0
    }
  }
  