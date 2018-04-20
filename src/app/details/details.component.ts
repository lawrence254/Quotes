import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() saying:Quote;
  @Output() complete = new EventEmitter<boolean>();

  deleteQuote(deleteQ:boolean){
    this.complete.emit(deleteQ);
  }
  constructor() { }

  ngOnInit() {
  }

}
