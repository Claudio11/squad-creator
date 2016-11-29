'use strict';

import { Team } from "../models/team.model"
import { PlayerService } from "./player.service"

export class TeamService {

    private _name: string;
    private _conditions: Condition[];
    private _potentialSquadPlayers: PotentialSquadPlayer[];
    private _formation: FormationGraph;

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
       if (psq1.getScore(this.conditions) !== psq2.getScore(this.conditions)) {
           preferedPlayer = (psq1.getScore(this.conditions) < psq1.getScore(this.conditions)) ? -1 : 1;
       }
       return preferedPlayer;
   }

    constructor (conditions: Condition[], potentialSquadPlayers: PotentialSquadPlayer, formation: FormationGraph) {
        this.conditions = conditions;
        this.potentialSquadPlayers = potentialSquadPlayers;
        this.formation = formation;
    }

    createTeamBy (conditions: any[]): Team {}

    /**
     *  First run of the search, obtain the best candidates without taking into account chemistry.
     *
     *
     *  @return Object with the format: {'gk': [gk1, gk2, ...], 'cb': [cb1, cb2], ...}.
     */
    getIndividualBestCandidates (): any {
        let playerPositionMatrix = {};
        let positions: Position[]  = this.getPositionsObject(this.formation);

        for (let i in positions) {
            let currentPositionPlayers: Player = PlayerService.getPlayersByPosition(positions[i].key);
            let potentialSquadPlayerList: PotentialSquadPlayer[] = [];
            for (let i in currentPositionPlayers) {
                potentialSquadPlayerList.push(new PotentialSquadPlayer(currentPositionPlayers[i]));
            }
            potentialSquadPlayerList.sort(this._sortByScoreCb());

            playerPositionMatrix[positions[i].key] = potentialSquadPlayerList.slice(0,10); // Only first 10, set "10" as variable.
        }

        return playerPositionMatrix;
    }

    /**
     *  Second run of the search, after we identify best candidates, we try to find the best group
     *  taking into account chemistry.
     *
     *  @param Formation for the given challenge with the players in it.
     */
    getGroupBestCandidates (): FormationGraph {
        let individualBestCandidates = this.getIndividualBestCandidates();
        let positionWithMoreSiblings = formation.getVertexWithMoreSiblings();

        // Obtain base chemistry set of players.
        this.setChemistryBasePlayers(positionWithMoreSiblings, individualBestCandidates);
        // After every player is set, re-calculate relevance ratio for conditions (as separate run?).


        // TODO: Start by getting the best players for above position and siblings, then those players are fixed, and build around it.
        // Check global conditions here.
    }

    /**
     *  Set the base players (player with more sibling vertices, and its siblings)
     *  in the current formation depending on chemistry from the list of best candidates.
     *
     *  @param positionWithMoreSiblings Position with more siblings.
     *  @param individualBestCandidates Best players candidates with this format: [{'gk': [gk1, gk2, ...], 'cb': [cb1, cb2], ...}].
     */
    setChemistryBasePlayers (positionWithMoreSiblings: Position, individualBestCandidates: any) {
        this.setBestPlayerAndSiblings(positionWithMoreSiblings: Position, individualBestCandidates: any);

    }

    /**
     *  Set the best player and its siblings form a list of candidates.
     *
     *  @param centralPosition Position with more siblings.
     *  @param individualBestCandidates Best players candidates with this format: {'gk': [gk1, gk2, ...], 'cb': [cb1, cb2], ...}.
     */
    setBestPlayerAndSiblings (centralPosition: Position, individualBestCandidates: any) {
        let positionVertexForPlayer: PositionVertex = formation.getVertexByPosition(centralPosition);


        // Refactor on set best players from positions.
        let allPositionVertexIncluded = positionVertexForPlayer.concat(positionVertexForPlayer.siblings);
        let mapPositionIndexBreak: any = {}; // map of the position, and when the the index change in the table of truth, i.e.: {'gk': 1, 'cb': 8}.

        let combinationsLength: any = Util.getTableOfTruthLength(individualBestCandidates);
        Util.setBreakIndex(individualBestCandidates, mapPositionIndexBreak);

        let currentBestPlayers: any = {}; // Format {'cam': pl1: Player, 'st': pl2: Player}
        let maxChemistry: number: 0;
        for (let i =0; i < combinationsLength; i++) {  // Iterating over combination rows.

            let currentPlayers:any = this.castRowDataToPositionVertex(mapPositionIndexBreak, individualBestCandidates);
            this.setPlayersInFormation(currentPlayers);

            if (this.formation.getGroupChemistry() > maxChemistry) {  // For now only focus in score by chemistry, later compare all conditions taking into account condition relevance.
                currentBestPlayers = currentPlayers;
            }

            for (let i in allPositionVertexIncluded) {  // Iterating over the position vertices to change count or not, preparing index for next iteration.
                let currentPosVertex: PositionVertex = allPositionVertexIncluded[i];
                if (mapPositionIndexBreak[currentPosVertex.position.key].indexBreak % (i + 1) ) {  // Is divisible? According to table of truth change index here.
                    mapPositionIndexBreak[currentPosVertex.position.key].count++;
                }
            }
        }

        if (currentBestPlayers) {
            this.setPlayersInFormation(currentBestPlayers); // Now this formation has the best potential players based on the conditions.
        }

    }


}
