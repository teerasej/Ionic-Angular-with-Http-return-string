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
    let url = "http://nextflow.in.th/example/ionic/string-response/string.php";
    console.log('Sending: ' + url);


    this.http.get(url).subscribe(res => {
      
      console.log('Got it.');
      
      let result = res.text();
      
      console.log(result);
      this.result = result;

    })
  }

}
