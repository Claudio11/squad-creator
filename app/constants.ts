// Table that holds the chemistry for players, based on player qpl and positioning correctness, format qplPositionTable[qpl][positioning].
module.exports.qplPositionTable = {
    "worst": {
        "worst": 0,
        "intermediate": 1,
        "good": 2,
        "best": 3
    },
    "intermediate": {
        "worst": 1,
        "intermediate": 3,
        "good": 5,
        "best": 6
    },
    "good": {
        "worst": 2,
        "intermediate": 5,
        "good": 8,
        "best": 9
    },
    "best": {
        "worst": 2,
        "intermediate": 5,
        "good": 9,
        "best": 10
    }
}
