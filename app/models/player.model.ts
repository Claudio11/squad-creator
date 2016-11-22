'use strict';

import { Vertex } from "../dataStructures/vertex.model";
import { Constants } from "../constants";
import { Position } from "./position.model";

export class Player extends Vertex {

    private _id: string;
    private _name: string;
    private _rating: number;
    private _position: Position;
    private _league: League;
    private _nation: Nation;
    private _club: Club;

    get id () : string {
      return this._id;
    }

    set id (id: string) {
      this._id = id;
    }

    get name () : string {
      return this._name;
    }

    set name (name: string) {
      this._name = name;
    }

    get rating () : number {
      return this._rating;
    }

    set rating (value: number) {
      this._rating = value;
    }

    get position () : Position {
      return this._position;
    }

    set position (value: Position) {
      this._position = value;
    }

    get league () : League {
      return this._league;
    }

    set league (value: League) {
      this._league = value;
    }

    get nation () : Nation {
      return this._nation;
    }

    set nation (value: Nation) {
      this._nation = value;
    }

    get club () : Club {
      return this._club;
    }

    set club (value: Club) {
      this._club = value;
    }


    /**
     *  Returns the chemistry that {{this}} has with a different player.
     *
     *  @param Player to compare.
     *
     *  @return Chemistry between this player and the one given by parameter.
     */
    getRelatedLinkValue (player: Player) {
        let relatedLinkValue = 0;

        if (this.nation.equals(player.nation)) {
            relatedLinkValue++;
        }
        if (this.league.equals(player.league)) {
            relatedLinkValue++;
        }
        if (this.club.equals(player.club)) {
            relatedLinkValue++;
        }
        return relatedLinkValue;
    }

    getPositionChemistry () {

    }

    constructor (data: any) {
        super(data);
        this.id = data.id;
        this.name = data.name;
        this.rating = data.rating;
        this.position = data.position;
        this.league = new League(data.league);  // TODO: Create league class.
        this.nation = new Nation(data.nation);  // TODO: Create nation class.
        this.club = new Club(data.club);  // TODO: Create club class.
    }

}
