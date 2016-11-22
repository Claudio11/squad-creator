'use strict';

import { Team } from "../models/team.model"
import { PlayerService } from "./player.service"

export class TeamService {

    private _name: string;

    get name () : string {
      return this._name;
    }

    set name (id: string) {
      this._name = name;
    }

    constructor (data: any) {

    }

    createTeamBy (conditions: any[]): Team {}


}
