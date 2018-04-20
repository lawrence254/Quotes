import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('the same for you.','Princess Diana','BrainyQuotes.com',new Date(2018,1,12),0,0),
    new Quote('the same for you.','Princess Diana','BrainyQuotes.com',new Date(2018,1,12),0,0)
  ]
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
