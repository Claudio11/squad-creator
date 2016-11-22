Player = require("./player.model.ts");
FormationGraph = require("./formationGraph.model.ts");

export class Team {

    private _name: string;
    private _formation: FormationGraph;


    get name () : string {
      return this._name;
    }

    set name (id: string) {
      this._name = name;
    }

    get formation () : PlayerPool {
      return this._formation;
    }

    set formation (formation: PlayerPool) {
      this._formation = formation;
    }

    constructor (data: any) {

    }

}
