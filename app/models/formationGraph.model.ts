'use strict';

import { PlayerPoolGraph } from "./playerPoolGraph.model";
import { PositionVertex } = from "../positionVertex.model";

export class FormationGraph extends PlayerPoolGraph {

    private _playerVertices: PositionVertex[];

    constructor (data: any) {
        super(data);
    }

}
