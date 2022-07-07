import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy {
  date: Date = new Date();
  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription: Subscription | undefined;

  constructor() {}
  ngOnInit(): void {
    //using basic interval
    // this.intervalId = setInterval(() => {
    //   this.time = new Date();
    // }, 1000);

    //using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((timer) => {
        this.rxTime = timer;
      });
  }
  ngOnDestroy(): void {
    // clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
