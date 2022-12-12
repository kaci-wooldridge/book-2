/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
    </section> */

    const computer = {
        id: 1,
        manufacturer: "Apple",
        make: "Macbook",
        model: "Pro",
        specs: {
            memory: 32,
            hardDrive: "500 GB",
            processor: 2.4
        }
    }

const aFunction = (someObj) => {
    const computerHTML =
    `<section id="computer--${someObj.id}">
	<h1>${someObj.manufacturer} ${someObj.make}</h1>
	<div>Model: ${someObj.model}</div>
	<div>Memory: ${someObj.specs.memory} GB</div>
	<div>Hard drive space: ${someObj.specs.hardDrive}</div>
	<div>Processor speed: ${someObj.specs.processor} Ghz</div>
    </section>`
    return computerHTML
}

const stringReturned = aFunction(computer)
console.log(stringReturned)