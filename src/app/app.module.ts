import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesService } from './games.service';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [AppComponent, GameListComponent, GameDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
