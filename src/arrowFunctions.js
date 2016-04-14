export let areShorter = () => {
    return 'I am a function';
};

export let withoutCurlyBraces = () => 'I return too';

export let oneParameterWithoutParens = number => number - 1;

export let greetingArrowFirstSintax = (message, name) => {
    return message + ' ' + name;
};

export let bodyNeedsParensToReturnAnObject = () => {
    return {iAm: 'an object'};
}

export let greetingArrowSecondSintax = (message, name) => message + ' ' + name;

export let greetingArrowSecondSintaxOneParameter = name => 'Hello ' + name;

export let sumArrayNumbers =  (array) => {
    let total = 0;
    array.forEach(item => total += item)
    
    return total;
};