import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-stats',
  templateUrl: './edit-stats.component.html',
  styleUrls: ['./edit-stats.component.scss']
})
export class EditStatsComponent implements OnInit {
  player = { name: 'Player1', goals: 0, assists: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  saveStats(): void {
    alert(`Stats saved for player: ${this.player.name}`);
  }
}
