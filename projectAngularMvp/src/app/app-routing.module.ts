import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { EditStatsComponent } from './edit-stats/edit-stats.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: 'players', component: PlayersListComponent },
  { path: 'player/:id', component: PlayerProfileComponent },
  { path: 'matches', component: MatchesListComponent },
  { path: 'edit-stats', component: EditStatsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

