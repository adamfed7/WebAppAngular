import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarmupComponent } from './exercises/warmup/warmup.component';
import { DatesComponent } from './exercises/dates/dates.component';
import { ClickCoordinatesComponent } from './exercises/click-coordinates/click-coordinates.component';
import { MouseCoordinatesComponent } from './exercises/mouse-coordinates/mouse-coordinates.component';
import { SearchBoxComponent } from './exercises/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    WarmupComponent,
    DatesComponent,
    ClickCoordinatesComponent,
    MouseCoordinatesComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
