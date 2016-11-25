'use strict';

import { Player } from "./player.model";
import { FormationGraph } from "./formationGraph.model";

export class PotentialSquadPlayer {

    private _name: string;
    private _player: Player;


    get name () : string {
      return this._name;
    }

    set name (id: string) {
      this._name = name;
    }

    get player () : Player {
      return this._player;
    }

    set player (player: Player) {
      this._player = player;
    }

    constructor (data: any) {

    }

    /**
     *  Returns the score for the player.
     */
    getScore (conditions: Condition[]): number {
        let playerScore: number = 0;
        for (let i in conditions) {
            playerScore += conditions[i].getScore(this.player);
        }
        return playerScore;
    }

}
