import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, take, find, map } from 'rxjs/operators';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.component.html',
  styleUrls: ['./warmup.component.scss']
})
export class WarmupComponent implements OnInit {
  evenNumbers: number[] = [];
  firstFiveNumbers: number[] = [];
  onlyEight: number | undefined;
  numberLabels: string[] = [];

  ngOnInit() {
    const numbers$ = of(...Array.from({ length: 20 }, (_, i) => i + 1));
    

    numbers$.pipe(filter(num => num % 2 === 0))
      .subscribe(num => this.evenNumbers.push(num));

    numbers$.pipe(take(5))
      .subscribe(num => this.firstFiveNumbers.push(num));

    numbers$.pipe(find(num => num === 8))
      .subscribe(num => this.onlyEight = num);

    numbers$.pipe(map(num => `Liczba ${num}`))
      .subscribe(label => this.numberLabels.push(label));
  }
}

