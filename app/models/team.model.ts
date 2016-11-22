Player = require("./player.model.ts");
PlayerPool = require("./playerPool.model.ts");

export class Team {

    private _playerPool: PlayerPool;

    get playerPool () : PlayerPool {
      return this._playerPool;
    }

    set playerPool (playerPool: PlayerPool) {
      this._playerPool = playerPool;
    }

    constructor (data: any) {

    }

}
