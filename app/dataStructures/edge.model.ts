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

    constructor (vertexSource: Vertex, vertexTarget: Vertex, value: number);
    constructor (json: any);
    constructor (vertexOrJson: any | Vertex, vertexTarget: Vertex, value: number) {
        if (vertexOrJson instanceof Vertex) {
            this.vertexSource = vertexOrJson;
            this.vertexTarget = vertexTarget;
            this.value = value;
        }
        else {
            this.vertexSource = vertexOrJson.vertexSource;
            this.vertexTarget = vertexOrJson.vertexTarget;
            this.value = vertexOrJson.value;
        }
    }

    // Return true if this edge has both vertex passed by parameter.
    isEdgeOfVertices (vertexSource:Vertex, vertexTarget: Vertex): boolean {
        let equals: boolean = false;
        if (this.vertexSource.equals(vertexSource) || this.vertexSource.equals(vertexTarget)) {
            let otherVertex = (this.vertexSource.equals(vertexSource)) ? vertexTarget : vertexSource;
            if (otherVertex.equals(this.vertexTarget)) {
                equals = true;
            }
        }
        return equals;
    }
}
