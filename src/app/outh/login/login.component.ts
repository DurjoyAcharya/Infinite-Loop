import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // name: string = 'Durjoy Acharya';
  constructor() {}
  ngOnInit(): void {}
  getName(name: string): void {
    alert(name);
  }
  getWarn(w: string) {
    console.warn(w);
  }
}
