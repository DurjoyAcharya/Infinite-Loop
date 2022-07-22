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
  heading: string = 'Nested For Loop';
  Users: any[] = [
    {
      name: 'Durjoy Acharya',
      phone: '01876068550',
      email: 'da-durjoy@outlook.com',
      accounts: ['Facebook', 'Twitter', 'Instagram'],
    },
    {
      name: 'Mira Bakshi',
      phone: '01714809550',
      email: 'durjoy.tourist@gmail.com',
      accounts: ['Viver', 'Linkdin', 'Tiktok'],
    },
    {
      name: 'Sreya',
      phone: '01965750560',
      email: 'durjoy.acharya120@gmail.com',
      accounts: ['Bluebook', 'Imo', 'Whatsapp'],
    },
    {
      name: 'Akash',
      phone: '01389894894',
      email: 'Akash990@outlook.com',
      accounts: ['Facebook', 'Twitter', 'Instagram'],
    },
  ];
  color = 'red';
  getColor() {
    this.color = 'blue';
  }
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
