import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {
  player = { name: 'Player1', position: 'Midfielder', number: 8 };

  constructor() { }

  ngOnInit(): void {
  }
}

