//creating variables from array elements
let  colors = ["red", "green", "blue", "yellow", "orange"];

export let [primary, secondary, tertiary, ...otherColors] = colors;

function getDate() {
    let currentDay = new Date();

    return [currentDay.getDate(), currentDay.getMonth() + 1, currentDay.getFullYear()]
}

export var [day, month, year] = getDate();

var speaker = {
    firstName: "Denis Juan",
    lastName: "Alonso González",
    twitterId: "@denjalonso"
}

export var {firstName, lastName, twitterId} = speaker;