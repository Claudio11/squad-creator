PlayerPoolGraph = require("./playerPoolGraph.model.ts");
PositionVertex = require("../positionVertex.model.ts")

export class FormationGraph extends PlayerPoolGraph {

    private _playerVertices: PositionVertex[];

    constructor (data: any) {
        super(data);
    }

}
