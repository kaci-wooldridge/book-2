// Produce a car chassis (no input, outputs new chassis object)

// const createChassis = () => {
// 	const newChassisObject = {	

//     }
//     return newChassisObject
// }

// Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

// Add an engine to chassis (input is a chassis, output is chassis with an engine)
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

// Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}

// Add a body to chassis (input is a chassis, output is chassis with a body)
const addBody = (chassisObject) => {
	chassisObject.body = "Fever"
	return chassisObject
}

// Add a drive train to chassis (input is a chassis, output is chassis with a drive train)
const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject
}

let createChassis = () => {
	const newChassisObject = { }
    newChassisObject.name = "Ford"
    addBody(newChassisObject);
    addWheels(newChassisObject);
    addEngine(newChassisObject);
    addSteeringWheel(newChassisObject);
    addDriveTrain(newChassisObject);
    return newChassisObject
}

let chassisComplete = createChassis()
console.log(chassisComplete)