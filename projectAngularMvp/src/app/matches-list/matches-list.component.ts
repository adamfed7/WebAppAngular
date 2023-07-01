import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  matches = [
    { opponent: 'Team A', date: '2023-07-01', score: '2-1' },
    { opponent: 'Team B', date: '2023-07-02', score: '1-3' }
  ];

  displayedColumns = ['opponent', 'date', 'score'];

  constructor() { }

  ngOnInit(): void {
  }

  viewMatch(match: any): void {
    alert(`Viewing match against: ${match.opponent}`);
  }
}

