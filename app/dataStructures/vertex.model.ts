// Bidirectional Vertex...

export class Vertex {

    private _siblings: Vertex[];
    private _element: any;

    get siblings () : Vertex[] {
      return this._siblings;
    }

    set siblings (siblings: Vertex[]) {
      this._siblings = siblings;
    }

    get element () : any {
      return this._element;
    }

    set element (element: any) {
      this._element = element;
    }

    constructor () {
        if (data) {
            this.siblings = data.siblings || [];
            this.element = data.element;
        }
        else {
            this.siblings = [];
        }
    }

    // Adds an edge between {{this}} and the vertex passed by parameter.
    addSibling (vertex: Vertex): void {
        if (!this.isSibling(vertex)) {
            this.siblings.push(vertex);
        }
    }

    isSibling (vertex: Vertex): boolean {
        let isSiblingPresent: boolean = false;
        for (var i in this.siblings) {
            if (this.siblings[i].equals(vertex)) {
                isSiblingPresent = true;
                break;
            }
        }
        return isSiblingPresent;
    }
}
