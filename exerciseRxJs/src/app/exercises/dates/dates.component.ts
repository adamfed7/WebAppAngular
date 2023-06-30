import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  dates: Date[] = [];

  ngOnInit() {
    const startDate = new Date();

    interval(1000).pipe(
      take(10),
      map(day => new Date(startDate.getTime() + day * 24 * 60 * 60 * 1000))
    ).subscribe(date => this.dates.push(date));
  }
}

