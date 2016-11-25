'use strict';

import { Team } from "../models/team.model"
import { PlayerService } from "./player.service"

export class TeamService {

    private _name: string;
    private _conditions: Condition[];
    private _potentialSquadPlayers: PotentialSquadPlayer[];

    get name () : string {
      return this._name;
    }

    set name (id: string) {
      this._name = name;
    }

    /**
     *  Callback to sort by player score for given conditions.
     *
     *  @param psq1 First player to compare.
     *  @param psq2 Second player to compare.
     *
     *  @return 1 if psq1 has better score, -1 if psq2 has better score, 0 if both have same score.
     */
    _sortByScoreCb (psq1: PotentialSquadPlayer, psq2: PotentialSquadPlayer) => {
       let preferedPlayer: number = 0;
       if (psq1.getScore() !== psq2.getScore()) {
           preferedPlayer = (psq1.getScore(this.conditions) < psq1.getScore(this.conditions)) ? -1 : 1;
       }
       return preferedPlayer;
   }

    constructor (conditions: Condition[], potentialSquadPlayers: PotentialSquadPlayer) {
        this.conditions = conditions;
        this.potentialSquadPlayers = potentialSquadPlayers;
    }

    createTeamBy (conditions: any[]): Team {}

    /**
     *  First run of the search, obtain the best candidates without taking into account chemistry.
     *
     *  @param Formation for th given challenge.
     *
     *  @return Object with the format: {'gk': [gk1, gk2, ...], 'cb': [cb1, cb2], ...}.
     */
    getIndividualBestCandidates (currentFormation: FormationGraph): any {
        let playerPositionMatrix = {};

        let positions: Position[]  = this.getPositionsObject(currentFormation);

        for (let i in positions) {
            let currentPositionPlayers = PlayerService.getPlayersByPosition(positions[i].key);
            for (let i in currentPositionPlayers) {
                currentPositionPlayers.push(new PotentialSquadPlayer(currentPositionPlayers[i]));
            }
            currentPositionPlayers.sort(this._sortByScoreCb());

            playerPositionMatrix[positions[i].key] = currentPositionPlayers.slice(0,10); // Only first 10, set "10" as variable.
        }

        return playerPositionMatrix;
    }

    /**
     *  Second run of the search, after we identify best candidates, we try to find the best group
     *  taking into account chemistry.
     *
     *   @param Formation for the given challenge.
     *
     *   @param Formation for the given challenge with the players in it.
     */
    getGroupBestCandidates (formation: FormationGraph): FormationGraph {
        let individualBestCandidates = this.getIndividualBestCandidates(formation);
        let positionWithMoreSiblings = formation.getVertexWithMoreSiblings();

        // TODO: Start by getting the best players for above position and siblings, then those players are fixed, and build around it.
        // TODO: Make more than one run.
    }

}
