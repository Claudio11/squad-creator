'use strict';

import { Graph } from "./graph.model";
import { PositionVertex } = from "../positionVertex.model";

export class FormationGraph extends Graph {

    private _positionVertices: PositionVertex[];

    get positionVertices () : PositionVertex[] {
      return this._positionVertices;
    }

    set positionVertices (positionVertices: PositionVertex[]) {
      this._positionVertices = positionVertices;
    }

    constructor (data: any) {
        super(data);
        this.positionVertices = data.positionVertices;
    }

}
