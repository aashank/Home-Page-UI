import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
cards=[];
  constructor() { }

  ngOnInit(): void {
    this.cards=["#35D3B4","#1B2191","#D822EE"];
  }

}
