// Buy a big lump of clay
const buyClay = () =>{
    const newObj = {}
    return newObj
}
// Use a pottery wheel to turn the clay into a bowl
const makePottery = (obj) =>{
    obj.shape = "bowl"
    return obj
}
// Put the bowl into a kiln for a bisque firing
const bisqueFire = (obj) =>{
    obj.readyForGlazing = true
}
// Apply glaze to bowl
const glazePottery = (obj) =>{
    if (obj.readyForGlazing = true){
        obj.glazing = "Midnight Blue"
        return obj
    }else{
        console.log("Make sure you bisque fire the pottery before you glaze it")
    }
}
// Put glazed bowl in kiln for final firing
const finalFiring = (obj, temp) =>{
    if(temp > 1200){
        obj.cracked = true
        return obj
    }else{
        obj.cracked = false
        return obj
    }
}

const newClay = buyClay()

const firedPottery1200 = finalFiring(newClay, 1200)
console.log(firedPottery1200)

