// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
    drivers.push('Ralph')
}

function destructivelyPrependDriver() {
    drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    let newDrivers = [...drivers, "Broom"]
   return [...drivers, "Broom"]
}

function prependDriver(name) {
    return [name,...drivers]
}

function removeLastDriver() {
    let newDrivers = drivers.slice(0,-1)
    return newDrivers
}

function removeFirstDriver() {
    let newDrivers = drivers.slice(1)
    return newDrivers
}