'use strict';

import { Vertex } from "./vertex.model";

export class Edge {

    private _vertexSource: Vertex;
    private _vertexTarget: Vertex;
    private _value: number;

    get vertexSource () : Vertex {
      return this._vertexSource;
    }

    set vertexSource (vertexSource: Vertex) {
      this._vertexSource = vertexSource;
    }

    get vertexTarget () : Vertex {
      return this._vertexTarget;
    }

    set vertexTarget (vertexTarget: Vertex) {
      this._vertexTarget = vertexTarget;
    }

    get value () : number {
      return this._value;
    }

    set value (value: number) {
      this._value = value;
    }

    constructor (data: any) {
        if (data) {
            this.vertexSource = data.vertexSource;
            this.vertexTarget = data.vertexTarget;
            this.value = data.value;
        }
    }

    // Return true if this edge has both vertex passed by parameter.
    isEdgeOfVertices (vertexSource:Vertex, vertexTarget: Vertex): boolean {
        let equals: boolean = false;
        if (this.vertexSource.equals(vertexSource) || this.vertexSource.equals(vertexTarget)) {
            let otherVertex = (this.vertexSource.equals(vertexSource)) ? vertexTarget : vertexSource;
            if (otherVertex.equals(this.vertexTarget)) {
                equals = true;
                break;
            }
        }
        return equals;
    }
}
