import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cmp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getDate() {
    console.log('Hello World');
    return new Date();
  }
}
