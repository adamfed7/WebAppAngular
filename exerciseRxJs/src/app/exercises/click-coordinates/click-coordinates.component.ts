import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-click-coordinates',
  templateUrl: './click-coordinates.component.html',
  styleUrls: ['./click-coordinates.component.scss']
})
export class ClickCoordinatesComponent implements OnInit {
  coordinates: { x: number, y: number }[] = [];

  ngOnInit() {
    fromEvent<MouseEvent>(document, 'click').pipe(
      map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY }))
    ).subscribe(coords => this.coordinates.push(coords));
  }
}
