import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarmupComponent } from './exercises/warmup/warmup.component';
import { DatesComponent } from './exercises/dates/dates.component';
import { ClickCoordinatesComponent } from './exercises/click-coordinates/click-coordinates.component';
import { MouseCoordinatesComponent } from './exercises/mouse-coordinates/mouse-coordinates.component';
import { SearchBoxComponent } from './exercises/search-box/search-box.component';

const routes: Routes = [
  { path: 'warmup', component: WarmupComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'click-coordinates', component: ClickCoordinatesComponent },
  { path: 'mouse-coordinates', component: MouseCoordinatesComponent },
  { path: 'search-box', component: SearchBoxComponent },
  { path: '', redirectTo: '/warmup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

