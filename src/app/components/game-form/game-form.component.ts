import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Game } from '../../models/Game';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {


  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private gamesService: GamesService, private route: Router, private activatedRoute: ActivatedRoute   ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params['id'])
    if(params['id']){
      this.gamesService.getGame(params['id'])
        .subscribe(
          res => { 
            console.log(res);
            this.game = res; 
            this.edit = true;
          },
          err => console.error(err)
        )
    }

  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    this.gamesService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/games']);
        },
        err => console.error(err)
      );
  }

  updateGame(){
    delete this.game.created_at;
    this.gamesService.updateGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/games']);
        },
        err => console.error(err)
      );
  }

}
