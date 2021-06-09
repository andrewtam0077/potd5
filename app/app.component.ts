import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'You Wanna Food';
  author = 'HEDO!!'

  drinks=['coffee', 'tea', 'm yea', 'drink'];
  //orderModel = new Order(); // create an order
  orderModel: Order; //or make it without initializing it

  constructor(private http: HttpClient) { //
    this.orderModel = new Order("Kerbo", "thats@amore.com", null, "", "", null);
    //initialize it here
  }

  confirm_msg = "";
  confirmOrder(data: any): void {
    this.confirm_msg = "Thank you, " + data.name + ".";
    this.confirm_msg += "You ordered a " + data.tempPreference + " " + data.drink + ".";
    if(data.sendmsg) {
      this.confirm_msg += "We will text you once your order is complete";
    }
  }

  response: any;
  onSubmit(form: any): void {
    //prepare data
    let params = JSON.stringify(form);

    // to get a GET request, make use URL rewriting
    //'dest-backend' should be url of server (so get url when you run xampp)
        //    this.http.post<any>('dest-backend', params);
    this.http.get<any>('dest-backend?str='+params).subscribe(
        (data) => {
        //what to do with the response
        this.response = data;
        }, (error)=>{
        // handle error if we get an error response
        console.log('Error: ', error);
        }
      );
    //subscribe lets you sit and wait for responses from the backend
  } //*/
}
