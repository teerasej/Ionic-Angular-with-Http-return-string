import {Http} from '@angular/http';
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


    this.http.post(url, {}).subscribe(res => {
      
      console.log('Got it.');
      
      let result = res.text();
      
      console.log(result);
      this.result = result;

    })
  }

}
