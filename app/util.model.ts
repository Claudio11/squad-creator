'use strict';

export class Util {

    constructor (data: any) {

    }

    // Table of truth related functions.

    // Obtains the length of the table of truth TODO: Javadoc comment.
    getTableOfTruthLength (tableOfTruthData: any): number {
        let combinationsLength: number = 1;
        for (let i in tableOfTruthData) {  // Refactor on method getTableOfTruthMetadata()
            combinationsLength *= (tableOfTruthData[i].length) ? tableOfTruthData[i].length :  1;  // Obtain the length of the "table of truth"
        }
        return combinationsLength;
    }

    setBreakIndex (tableOfTruthData: any, mapPositionIndexBreak: any) {
        let previousIndexBreak: number = 1;

        for (let i in tableOfTruthData) {  // Refactor on method getTableOfTruthMetadata()
            mapPositionIndexBreak[i] = {"indexBreak": tableOfTruthData[i].length * previousIndexBreak, "count": 0 };
            previousIndexBreak = (mapPositionIndexBreak[i].length) ? mapPositionIndexBreak[i].length: 1;
        }
    }
}
