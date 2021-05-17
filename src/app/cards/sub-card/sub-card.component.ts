import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-card',
  templateUrl: './sub-card.component.html',
  styleUrls: ['./sub-card.component.css']
})
export class SubCardComponent implements OnInit {
  constructor() { }
@Input('card') card:string;
  ngOnInit(): void {
  }

}
