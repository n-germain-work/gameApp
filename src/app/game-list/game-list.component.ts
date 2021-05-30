import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  items = this.gamesService.getList();
  addGameForm = this.formBuilder.group({
    name: '',
    description: '',
  });

  constructor(
    private gamesService: GamesService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.gamesService.addToList({
      id:
        this.items.length === 0 ? 0 : this.items[this.items.length - 1].id + 1,
      name: this.addGameForm.value.name,
      description: this.addGameForm.value.description,
    });
  }

  ngOnInit(): void {}
}
