import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  title = 'HP EliteBook 840 G5';
  value!: string;
  change(value: string): void {
    this.value = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
