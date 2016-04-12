export function divide(x, y) {
    if (y !== 0) {
        var result = x / y;
    }
    return result;
}

export function divideSecondImplementation(x, y) {
    if (y !== 0) {
        let result = x / y;
    }
    
    return result;
}

//creating objects from variables
let firstName = "Denis Juan";
let lastName = "Alonso Glez";
let twitterId = "@denjalonso";

export let speaker = {firstName, lastName, twitterId};