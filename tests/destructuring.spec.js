import {primary, secondary, tertiary, otherColors} from "../src/destructuring";

describe("destructuring", () => {
    describe("creating variables from array elements", () => {
       it("should set variables without assign to array elements", () => {
           expect(primary).toBe("red");
           expect(secondary).toBe("green");
           expect(tertiary).toBe("blue");
       })
    });
    describe("spread operator", () => {
        it("should spread the last parameter as an array that contains the rest o values", () => {
            expect(otherColors).toBeAn(Array);
            expect(otherColors).toEqual(["yellow", "orange"]);
        });
    });
});