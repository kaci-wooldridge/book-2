const { createMarble } = require("./marbleMaker.js")

const marble = createMarble("small")
console.log(marble)

const { weaveBag } = require("./bagMaker.js")
const bag = weaveBag("silk")
console.log(bag)