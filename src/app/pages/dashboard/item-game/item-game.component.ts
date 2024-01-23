import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { GamesService } from '../../../services/games.service';
import { PeriodicElement } from '../actuality/actuality.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-item-game',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './item-game.component.html',
  styleUrl: './item-game.component.scss'
})
export class ItemGameComponent {
  // Data
  data: PeriodicElement = {};

  // Constructor
  constructor(
    private route: ActivatedRoute,
    private serviceGames: GamesService
    ) {
    route.params.subscribe((params: Params)=> {
      const prodId = params['id'];
      this.serviceGames.getGame(prodId).then((res)=> {
        this.data = res;
      })
    })
  }
}
