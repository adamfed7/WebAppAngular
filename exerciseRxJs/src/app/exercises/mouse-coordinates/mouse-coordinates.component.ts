import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, sampleTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-mouse-coordinates',
  templateUrl: './mouse-coordinates.component.html',
  styleUrls: ['./mouse-coordinates.component.scss']
})
export class MouseCoordinatesComponent implements OnInit {
  coordinates: { x: number, y: number }[] = [];

  ngOnInit() {
    fromEvent<MouseEvent>(document, 'mousemove').pipe(
      map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY })),
      sampleTime(1000),
      distinctUntilChanged(),
      debounceTime(2000),
      filter(coords => coords.x > 500)
    ).subscribe(coords => this.coordinates.push(coords));
  }
}
