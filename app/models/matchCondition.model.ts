'use strict';

import { Player } from "./player.model";
import { Condition } from "./condition.model";

export class MatchCondition extends Condition {

    /**
     *  Return the score of the given player for this condition.
     */
    getScore (player: Player): number {
        let playerValueForAttribute = player[this.playerAttribute];
        let isPresent: boolean = false;

        if (this.value) {
            for (let i in this.value) {
                if (this.value[i] === playerValueForAttribute) {
                    isPresent = true;
                    break;
                }
            }
        }

        return (isPresent) ? this.currentRelevance: 0;
    }

    constructor (data: any) {

    }

}
