import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('I think being in love with life is a key to eternal youth.','Doug Hutchison','success.com',new Date(2018,1,12),0,0),
    new Quote('A man who dares to waste one hour of time has not discovered the value of life.','Charles Darwin','Lawrence',new Date(2018,4,12),10,3),
    new Quote('You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.',
    'Walter Hagen','Samuel KNight',new Date(2018,3,12),6,1)
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.dateAdded = new Date();
    this.quotes.push(quote);
    console.log(this.quotes);
    
  }
  removeQuote(complete,index){
    if(complete){
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() { }

  ngOnInit() {
  }

}
