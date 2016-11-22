'use strict';

import { Vertex } from "./vertex.model";
import { Edge } from "./edge.model";

export class Graph {

    private _vertices: Vertex[];
    private _element: any;

    get vertices () : Vertex[] {
      return this._vertices;
    }

    set vertices (vertices: Vertex[]) {
      this._vertices = vertices;
    }

    get element () : any {
      return this._element;
    }

    set element (element: any) {
      this._element = element;
    }

    constructor (data: any) {
        if (data) {
            this.vertices = data.vertices || [];
            this.element = data.element;
        }
        else {
            this.vertices = [];
        }
    }

    // Add vertex to the list of vertices
    addVertex (vertex:Vertex): void {
        if (!this.isVertexPresent(vertex)) {
            this.vertices.push(vertex);
        }
    }

    // Adds an edge between vertexSource and vertexTarget
    addEdge (vertexSource: Vertex, vertexTarget: Vertex, edgeValue?: number): void;
    addEdge (vertexSource: Vertex, vertexTarget: Vertex): void {
        vertexSource.addSibling(vertexTarget);
        vertexTarget.addSibling(vertexSource);
    }

    isVertexPresent (vertex: Vertex): boolean  {
        let isVertexPresentPresent: boolean = false;
        for (var i in this.vertices) {
            if (this.vertices[i].equals(vertex)) {
                isVertexPresentPresent = true;
                break;
            }
        }
        return isVertexPresentPresent;
    }
}
