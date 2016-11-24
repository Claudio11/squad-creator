'use strict';

import { Player } from "./player.model";
import { Condition } from "./condition.model";

export class PercentageCondition extends Condition {

    /**
     *  Return the score of the given player for this condition.
     */
    getScore (player: Player): number {
        let minValue = ((this.value - 10) > 0) ? this.value - 10: 0;
        let playerValueForAttribute = player[this.playerAttribute];
        let calculatedRelevance:number;

        if (minValue <= playerValueForAttribute) {
            calculatedRelevance = this.relevance;
        }
        else {
            let diff = min - playerValueForAttribute;
            calculatedRelevance = this.relevance * 100 / diff;  // TODO: try different ratios.
        }

        return calculatedRelevance;
    }

    constructor (data: any) {

    }

}
