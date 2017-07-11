import {Http, Headers, RequestOptions} from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result;

  constructor(public navCtrl: NavController, public http: Http) {
  
    
  }

  send() {

    // Update this URL to your endpoint that return string. 
    // Example PHP files are in 'PHP' folder in this project.
    let url = "/post-string.php";
    console.log('Sending: ' + url);

    
    // In fact, Angular's Http will set Content-Type to 'application/json' as default
    // We can modify to other content's type if needed.
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions();
    options.headers = headers;


    this.http.post(url, {}, options).subscribe(res => {
      
      console.log('Got it.');
      
      let result = res.text();
      
      console.log(result);
      this.result = result;

    })
  }

}
