// Each day, the fishmonger buys exactly 10 of each inexpensive 
// fish caught by the fishing boat. 

// If any of the fishing boat's fish quantity 
// is less than 10, the fish monger does not buy it.
// The fishmonger does not buy any fish from the 
// boat that is priced higher than $7.50 per fish.

// Each fish object provided by the fish monger 
// should have a quantity of 10 instead of the 
// original quantity from the fishing boat.

const { boatInventory } = require("./fishingBoat.js")




const mongerInventory = () =>{
    let fishToday = boatInventory()
    let fishArray = []

    for(const fish of fishToday){
        if(fish.amount >= 10 && fish.price <= 7.50){
            fishArray.push(fish)
        }
    }
    for (const fish of fishArray){
        fish.amount = 10
    }
    return fishArray
}

// console.log(mongerInventory())

// The fishmonger lets the chef of a restuarant 
// specify what their maximum budget is per fish. For example, 
// a chef can tell the monger that she can only spend $5.00 per fish. 
// The function should then return only fish that cost $5.00 or less.

module.exports = { mongerInventory }







