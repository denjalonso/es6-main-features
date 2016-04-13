import * as arrowFunctions from "../src/arrowFunctions";

describe("arrow functions", () => {
    let message = 'Hello';
    let name = 'Denis';
    describe("first sintax with parameters", () => {
        it("should return a message", () => {
            expect(arrowFunctions.greetingArrowFirstSintax(message, name)).toEqual("Hello Denis");
        });
    });
    describe("second sintax with parameters", () => {
        it("should return a message", () => {
            expect(arrowFunctions.greetingArrowSecondSintax(message, name)).toEqual("Hello Denis");
        });
    });
    describe("second sintax with one parameter", () => {
        it("should return a message", () => {
            expect(arrowFunctions.greetingArrowSecondSintaxOneParameter(name)).toEqual("Hello Denis");
        });
    });
});

describe("another example with arrow function", () => {
    describe("arrow function as parameter", () => {
        let array = [1, 2, 3];
        it("should return the sum of numbers of an array", () => {
            expect(arrowFunctions.sumArrayNumbers(array)).toEqual(6);
        });
    });
});