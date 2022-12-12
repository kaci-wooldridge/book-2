const { mongerInventory } = require("./fishMonger.js")

// console.log(chefFish)

const fishMenu = (chefPrice) =>{
    let mFish = mongerInventory()
    todaysMenu=``
    for (const fish of mFish){
        if(fish.price <= chefPrice){
            fish.amount *= .5
            todaysMenu += `
            <h1>Menu</h1>
            <article class="menu">
                <h2>${fish.species}</h2>
                <section class="menu__item">${fish.species} Soup</section>
                <section class="menu__item">${fish.species} Sandwich</section>
                <section class="menu__item">Grilled ${fish.species}</section>
            </article>`
        }
    }
    return todaysMenu
}

// console.log(fishMenu(5))


module.exports = { fishMenu }