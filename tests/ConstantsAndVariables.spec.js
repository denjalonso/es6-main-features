import {divide, divideSecondImplementation, speaker} from "../src/ConstantsAndVariables";

describe("Scope of constants and variables", () => {
    describe ("divide function", () => {
        var x = 10;
        var y = 2;
        it("should return 5 value with result variable in the scope of the function", () => {
            expect(divide(x, y)).toEqual(5);
        });
        it("should fail because let isn't in the scope out of if sentence", () => {
            expect(() => divideSecondImplementation(x, y)).withArgs(x, y).toThrow("result is not defined");
        });
    });
    describe("create object from variables without asign properties", () => {
        it("should create object from variables like es6 way", () => {
            expect(speaker).toEqual({firstName: "Denis Juan", lastName: "Alonso Glez", twitterId: "@denjalonso"});
        });
    });
});