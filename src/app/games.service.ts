import { Injectable } from '@angular/core';
import { Game, games } from './games';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  items: Game[] = games;

  getList() {
    return this.items;
  }

  addToList(game: Game) {
    this.items.push(game);
  }

  getDetail(id: number) {
    return this.items[id];
  }

  deleteFromList(id: number) {
    this.items = this.items.filter((el) => el.id !== Number(id));
  }

  constructor() {}
}
