'use strict';

import { Graph } from "./graph.model";
import { Edge } from "./edge.model";

export class EdgeWeightedGraph extends Graph {

    private _edges: Edge[];

    get edges () : Edge[] {
      return this._edges;
    }

    set edges (edges: Edge[]) {
      this._edges = edges;
    }

    constructor (data: any) {
        super(data);
        for (let i in data.edges) {
            this.edges.push(new Edge(data.edges[i]))
        }
    }

    /**
     *  Returns the edge between given vertices.
     *
     *  @param vertexSource Vertex source.
     *  @param vertexTarget Vertex target.
     *
     *  @return Edge between given vertices.
     */
    getEdge (vertexSource: Vertex, vertexTarget: Vertex): void {
        let edge: Edge;
        for (let i in this.edges) {
            if (this.edges[i].isEdgeOfVertices(vertexSource, vertexTarget)) {
                edge = this.edges[i];
                break;
            }
        }
        return edge;
    }

    // Returns the value for the edge between the given vertices.
    getEdgeValue (vertexSource: Vertex, vertexTarget: Vertex): number {
        let edge: Edge = this.getEdge(vertexSource, vertexTarget);
        return (edge) ? edge.value: undefined;
    }

    // Set the value for the edge between the given vertices.
    setEdgeValue (vertexSource: Vertex, vertexTarget: Vertex, edgeValue: number): void {
        let edge: Edge = this.getEdge(vertexSource, vertexTarget);
        if (edge) {
            edge.value = edgeValue;
        }
    }

    // Adds an edge with a value between the given vertices.
    addEdge (vertexSource: Vertex, vertexTarget: Vertex, edgeValue: number): void {
        super.addEdge(vertexSource, vertexTarget);
        this.edges.push(new Edge(vertexSource, vertexTarget, edgeValue));
    }
}
