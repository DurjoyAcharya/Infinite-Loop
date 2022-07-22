import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['./friday.component.css'],
})
export class FridayComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
