import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.','Princess Diana','BrainyQuotes.com',new Date(2018,1,12))
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
