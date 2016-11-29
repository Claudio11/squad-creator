'use strict';

import { Graph } from "./graph.model";
import { PositionVertex }  from "../positionVertex.model";

export class FormationGraph extends Graph {

    private _positionVertices: PositionVertex[];

    get positionVertices () : PositionVertex[] {
      return this._positionVertices;
    }

    set positionVertices (positionVertices: PositionVertex[]) {
      this._positionVertices = positionVertices;
    }

    getVertexByPosition (position: Position): PositionVertex {
        let positionVertex: PositionVertex;
        for (let i in this.vertices) {
            if (this.vertices[i].position.equals(position)) {
                positionVertex
            }
        }
        return this.vertices[i];
    }

    /**
     *  Obtain the group chemistry among players in the formation.
     *
     *  @return Chemistry among players in the formation.
     */
    getGroupChemistry (): number {
        let groupChemistry: number = 0;
        for (let i in this.vertices) {
            if (this.vertices[i].player) {
                groupChemistry += this.vertices[i].getChemistry();
            }
        }
        return groupChemistry;
    }

    addVertexInPosition (position: Position, player: Player): boolean;

    constructor (data: any) {
        super(data);
        this.positionVertices = data.positionVertices;
    }

}
