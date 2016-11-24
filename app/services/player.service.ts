'use strict';

export class PlayerService {

    private _name: string;
    private _formation: FormationGraph;
    private _players: Player[];


    get name () : string {
      return this._name;
    }

    set name (id: string) {
      this._name = name;
    }

    get formation () : FormationGraph {
      return this._formation;
    }

    set formation (formation: FormationGraph) {
      this._formation = formation;
    }

    constructor (data: any) {

    }

    /**
     *  Obtain the players that plays in the position given by parameter.
     *
     *  @param Position to obtain.
     *
     *  @return Players from this pool that plays in the position given by parameter.
     */
    getPlayersByPosition (position:string): Player[] {
        let playersByPosition: Player[] = [];
        for (var i in this.players) {
            if (this.players[i].position === position) {
                playersByPosition.push(this.players[i]);
            }
        }
        return playersByPosition;
    }

    getPlayersByChemistryWithin (min: number, max:number): Player[] {}
    getPlayersByPriceWithin (min: number, max:number): Player[] {}
    getPlayersByNation (nations: Nation[]): Player[] {}
    getPlayersByLeague (leagues: League[]): Player[] {}
    getPlayersByClub (clubs: Club[]): Player[] {}

}
