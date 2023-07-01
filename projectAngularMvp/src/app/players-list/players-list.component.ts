import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  players = [
    { name: 'Player1', position: 'Midfielder', number: 8 },
    { name: 'Player2', position: 'Forward', number: 10 }
  ];
  
  displayedColumns = ['name', 'position', 'number'];

  constructor() { }

  ngOnInit(): void {
  }

  viewPlayer(player: any): void {
    alert(`Viewing player: ${player.name}`);
  }
}

