import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'Durjoy Acharya';
  items: number[] = [];

  init(): void {
    for (let i = 0; i < 10; i++) this.items.push(i);
  }
  ngOnInit(): void {
    this.getIpAddress();
    this.init();
  }
  public check(): boolean {
    return false;
  }
  ipAddress = '';
  getIpAddress() {
    this.http
      .get('https://api.ipify.org?format=json')
      .subscribe((data: any) => {
        this.ipAddress = data.ip;
      });
  }
  saveIpAddress() {
    localStorage.setItem('./op.json', this.ipAddress);
    console.log(localStorage.getItem('./op.json'));
  }
}
