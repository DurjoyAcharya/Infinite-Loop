import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <h2 class="custom">
      Durjoy Acharya
      <sub class="sm">This is Just inline style and inline templete</sub>
    </h2>
    <p>{{ Bangladesh() }}</p>
  `,
  styles: [
    `
      .custom {
        color: green;
      }
      .sm {
        font-size: 10px;
      }
    `,
  ],
})
export class CountryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public Bangladesh(): string {
    console.log('Bangladesh');
    return 'Bangladesh';
  }
}
