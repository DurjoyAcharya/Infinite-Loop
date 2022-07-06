import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
    `
      .custom {
        color: red;
      }
    `,
  ],
})
export class StudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
