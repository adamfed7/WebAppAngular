import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searches: string[] = [];

  ngOnInit() {
    const inputElement = document.createElement('input');
    document.body.appendChild(inputElement);

    const input$ = fromEvent(inputElement, 'input').pipe(
      map((event: any) => event.target.value),
      filter(text => text.length > 0),
      debounceTime(300),
      scan((history: string[], value: string) => history.concat(value), [])
    );

    input$.subscribe(searchHistory => this.searches = searchHistory);
}
}

