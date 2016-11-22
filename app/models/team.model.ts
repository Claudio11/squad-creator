'use strict';

import { Player } from "./player.model";
import { FormationGraph } from "./formationGraph.model";

export class Team {

    private _name: string;
    private _formation: FormationGraph;


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

}
