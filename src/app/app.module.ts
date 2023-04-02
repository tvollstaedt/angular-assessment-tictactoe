import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayfieldShellComponent } from './playfield-shell/playfield-shell.component';
import { LeaderboardComponent } from './playfield-shell/leaderboard/leaderboard.component';
import { PlayfieldGridComponent } from './playfield-shell/playfield-grid/playfield-grid.component';
import { GameSymbolComponent } from './playfield-shell/playfield-grid/game-symbol/game-symbol.component';
import { PlayfieldSingleBoxComponent } from './playfield-shell/playfield-grid/playfield-single-box/playfield-single-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayfieldShellComponent,
    LeaderboardComponent,
    PlayfieldGridComponent,
    GameSymbolComponent,
    PlayfieldSingleBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
