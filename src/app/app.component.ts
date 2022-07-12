import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Durjoy Acharya';
  items: number[] = [];
  init(): void {
    for (let i = 0; i < 10; i++) this.items.push(i);
  }
  ngOnInit(): void {
    this.init();
  }
  public check(): boolean {
    return false;
  }
}
