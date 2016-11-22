let Vertex = require("../dataStructures/vertex.model.js");
let Constants = require("../constants.ts")

export class Player extends Vertex {

    private _id: string;
    private _name: string;

    get id () : string {
      return this._id;
    }

    set id (id: string) {
      this._id = id;
    }

    get name () : string {
      return this._name;
    }

    set name (name: string) {
      this._name = name;
    }

    /**
     *  Returns the chemistry that {{this}} has with a different player.
     *
     *  @param Player to compare.
     *
     *  @return Chemistry between this player and the one given by parameter.
     */
    getRelatedLinkValue (player: Player) {
        let relatedLinkValue = 0;

        if (this.nation.equals(player.nation)) {
            relatedLinkValue++;
        }
        if (this.league.equals(player.league)) {
            relatedLinkValue++;
        }
        if (this.club.equals(player.club)) {
            relatedLinkValue++;
        }
        return relatedLinkValue;
    }

    getPositionChemistry () {

    }

    constructor (data: any) {
        super(data);
        this.id = data.id;
        this.name = data.name;
        this.rating = data.rating;
        this.position = data.position;
        this.league = new League(data.league);  // TODO: Create league class.
        this.nation = new Nation(data.nation);  // TODO: Create nation class.
        this.club = new Club(data.club);  // TODO: Create club class.
    }

}
