const createWoodBlock = () => {
    // Return an object with 4 properties.
    const newObj = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"

    }
    return newObj
}

const createBeautifulCarving = (newObj) => {
    // Return a string representation of the object
    const newString = `The ${newObj.length}-inch, ${newObj.material} ${newObj.type} was carved into a wooden ${newObj.purpose}`
    return newString
}


// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)