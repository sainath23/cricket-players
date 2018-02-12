import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;

  onSelect(player: Player) {
    this.selectedPlayer = player;
  }

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }

}
