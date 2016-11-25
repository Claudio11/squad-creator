'use strict';

import { Player } from "./player.model";
import { FormationGraph } from "./formationGraph.model";

export class Condition {

    private _value: any;  // Current value/s for this condition (can be a number (skill, chemistry) array of string (clubs, nations))
    private _relevance: number; // How important this condition is.
    private _currentRelevance: number; // How important this condition is at the moment (changes depending on already set players).
    private _playerAttribute: string;  // Player attribute where the condition is being applied. TODO: Create PlayerCondition class?


    get value () : string {
      return this._value;
    }

    set value (value string) {
      this._value = name;
    }

    get relevance () : number {
      return this._relevance;
    }

    set relevance (relevance: number) {
      this._relevance = relevance;
    }

    get currentRelevance () : number {
      return this._currentRelevance;
    }

    set currentRelevance (currentRelevance: number) {
      this._currentRelevance = currentRelevance;
    }

    /**
     *  Return the score of the given player for this condition.
     */
    getScore (player: Player) {

    }

    constructor (data: any) {

    }

}
