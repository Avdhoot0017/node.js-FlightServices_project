const { add } = require("winston")

function addrowlock(flightId)
{
    return `SELECT * from flights WHERE flights.id = ${flightId} FOR UPDATE;`
}

module.exports = {
    addrowlock
}