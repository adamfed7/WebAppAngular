import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingComponent } from './voting/voting.component';
import { ApiComponent } from './api/api.component';
import { QuickClickGameComponent } from './quick-click-game/quick-click-game.component';
import { KeyboardMasterGameComponent } from './keyboard-master-game/keyboard-master-game.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    ApiComponent,
    QuickClickGameComponent,
    KeyboardMasterGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
