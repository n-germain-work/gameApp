import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Game, games } from '../games';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  items = this.gamesService.getList();
  game: Game | undefined;
  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('gameId'));
    this.game = this.items.find((game) => game.id === gameIdFromRoute);
  }

  delete() {
    if (this.game) this.gamesService.deleteFromList(this.game.id);
    this.router.navigate([''], { relativeTo: this.route });
  }
}
