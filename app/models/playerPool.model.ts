Graph = require("../dataStructures/graph.model.ts");
Player = require("../player.model.ts")

export class PlayerPool extends Graph {

    constructor (data: any) {
        super(data);
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
        for (var i in this.vertices) {
            if (this.vertices[i].position === position) {
                playersByPosition.push(this.vertices[i]);
            }
        }
        return playersByPosition;
    }
}
