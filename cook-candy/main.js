// Buy some milk chocolate
const buyChoc = (candyObj) => {
    candyObj.type = "milk chocolate"
    return candyObj
}

// Add some mint flavoring
const addFlavor = (candyObj) => {
    candyObj.flavor = "mint"
    return candyObj
}

// Combine the chocolate and mint
const makeMix = (candyObj) => {
    if(candyObj.flavor === "mint"){
        candyObj.mixed = true
    }else{
        candyObj.mixed = false
    }
    return candyObj
}

// Bake the mixture
const bakeCandy = (candyObj) => {
    if(candyObj.mixed === true){
        candyObj.baked = true
    }else {
        candyObj.baked = false
    }
    return candyObj
}

// Break the hardened sheet into 6 pieces
let newArray = []
const breakBark = (candyObj) => {
    if(candyObj.baked === true){
        return newArray = [
            "mint chocolate bark piece",
            "mint chocolate bark piece",
            "mint chocolate bark piece",
            "mint chocolate bark piece",
            "mint chocolate bark piece",
            "mint chocolate bark piece"
        ]
    }
}

// 🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!

let cookCandy = () => {
    const candyObj = {}
    buyChoc(candyObj);
    addFlavor(candyObj);
    makeMix(candyObj);
    bakeCandy(candyObj);
    breakBark(candyObj);


    return candyObj
}

let candyComplete = cookCandy()
console.log(candyComplete)