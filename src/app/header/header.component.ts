import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cmp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  title: string = '';
  ngOnInit(): void {
    console.log('Hello World');
  }
  public Done() {
    alert('Submit Successfully');
  }
  public getData(msg: string) {
    console.log(msg);
    this.title = msg;
  }
}
