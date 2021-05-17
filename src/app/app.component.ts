import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aap';
  flag = false;
  movies=[
    {'actor':'Shahrukh','name':'Zero'},
    {'actor':'Amir','name':'PK'},
    {'actor':'Salman','name':'Radhe'}
  ]
  showName(){
 this.flag=!this.flag;
  }
}
