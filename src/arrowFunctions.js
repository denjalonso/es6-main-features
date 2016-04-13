export let greetingArrowFirstSintax = (message, name) => {
    return message + ' ' + name;
};

export let greetingArrowSecondSintax = (message, name) => message + ' ' + name;

export let greetingArrowSecondSintaxOneParameter = name => 'Hello ' + name;

export let sumOfArrayNumbers =  (array) => {
    let total = 0;
    array.forEach(item => total += item)
    
    return total;
};
