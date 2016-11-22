'use strict';

export class Position {

    private _key: string;
    private _category: string;

    get key () : string {
      return this._key;
    }

    set key (value: string) {
      this._key = value;
    }

    get category () : string {
      return this._category;
    }

    set category (value: string) {
      this._category = value;
    }

    constructor (key: string, category: string);
    constructor (json: any);
    constructor (jsonOrKey: any, category?: string) {
      if (typeof jsonOrKey === 'string') {
        this.key = jsonOrKey;
        this.category = category;
      }
      else {
        this.key = jsonOrKey.key;
        this.category = jsonOrKey.category;
      }
    }

}
