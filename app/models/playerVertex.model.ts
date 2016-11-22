let Vertex = require("../dataStructures/vertex.model.js");
let Constants = require("../constants.ts");
let Player = require("./player.model.ts");

export class PlayerVertex extends Vertex {

    /**
     *  Set the chemistry for the current player.
     *
     *  @param teamPosition Position in which he plays currently.
     *
     *  @return Chemistry for this player playing in this position.
     */
    getChemistry (teamPosition: string): number {
        let qpl: number = this.calculateQPL();
        return this.calculateChemistryByCurrentPosition(qpl, teamPosition);
    }

    /**
     *  Returns the QPL for this player.
     *
     *  @return QPL for this player.
     */
    calculateQPL () {
        let qpl:number = 0;
        let linksValue: number = 0;
        for (let i in this.siblings) {
            linksValue += this.element.getRelatedLinkValue(this.siblings[i].element);
        }
        return (this.siblings.length) ? linksValue / this.siblings.length: 0;
    }

    /**
     *  Returns the chemistry after filtering the position in which the player is playing.
     *
     *  @param qpl QPL calculated from the players relation.
     *  @param teamPosition Position in which player is playing currently.
     *
     *  @return Chemistry calculated after filtering positioning.
     */
    calculateChemistryByCurrentPosition (qpl: number, teamPosition: string) {
        let qplChemistry: string;
        let positionChemistry = this.element.getPositionChemistry(teamPosition); // TODO: getPositionChemistry and table for that in constants.
        if (qpl < 0.3) {
            qplChemistry = 'worst';
        }
        else if (qpl >= 0.3 && qpl < 1) {
            qplChemistry = 'intermediate';
        }
        else if (qpl >= 1 && qpl <= 1.6) {
            qplChemistry = 'good';
        }
        else { // QPL > 1.6
            qplChemistry = 'best';
        }
        return Constants.qplPositionTable[qplChemistry][positionChemistry];
    }

    constructor (data: any) {
        if (data && data.element) {
            data.element = new Player(data.element);
        }
        super(data);
    }

}
