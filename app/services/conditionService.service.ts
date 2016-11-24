'use strict';

import { Team } from "../models/team.model"
import { Player } from "../models/player.model"

export class ConditionService {

    constructor (data: any) {

    }

    /**
     *  Returns the score for the given player for a team.
     */
    getScore (team: Team, player: Player): Team {
        let playerScore: number = 0;
        for (let i in team.conditions) {
            playerScore += team.conditions[i].getScore(player);
        }
        return playerScore;
    }

}
