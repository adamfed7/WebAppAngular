import { Component, OnInit } from '@angular/core';
import { timer, of, forkJoin, concat } from 'rxjs';
import { map, delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  responses: string[] = [];

  private fakeApiCall(input: string, stream: number) {
    return of(`${input} (from stream ${stream})`).pipe(delay(1000));
  }

  ngOnInit(): void {
    const stream1 = this.fakeApiCall('Request 1', 1);
    const stream2 = this.fakeApiCall('Request 2', 2);
    const stream3 = this.fakeApiCall('Request 3', 3);

    forkJoin([stream1, stream2, stream3]).subscribe(responses => {
      this.responses = responses;
    });
    
    const sequential = concat(stream1, stream2, stream3);
    sequential.subscribe(response => {
      console.log(response);
    });
    
    const combined = stream1.pipe(
      concatMap(r1 => stream2.pipe(
        concatMap(r2 => stream3)
      ))
    );
    combined.subscribe(response => {
      console.log(response);
    });
  }
}
