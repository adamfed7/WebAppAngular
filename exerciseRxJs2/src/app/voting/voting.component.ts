import { Component, OnInit } from '@angular/core';
import { timer, of, forkJoin } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  votes: string[] = [];

  ngOnInit(): void {
    const randomVote = () => Math.random() > 0.5 ? 'za' : 'przeciw';

    const voter1 = timer(2000).pipe(map(() => randomVote()));
    const voter2 = timer(3000).pipe(map(() => randomVote()));
    const voter3 = timer(1000).pipe(map(() => randomVote()));

    forkJoin([voter1, voter2, voter3]).subscribe(votes => {
      this.votes = votes;
    });
  }
}

