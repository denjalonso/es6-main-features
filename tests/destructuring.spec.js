import {primary, secondary, tertiary, otherColors, day, month, year, firstName, lastName, twitterId} from "../src/destructuring";

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
    describe("functions with multiple return values", () => {
        it("should return an array of values", () => {
            var currentDay = new Date();
            expect(day).toEqual(currentDay.getDate());
            expect(month).toEqual(currentDay.getMonth() + 1);
            expect(year).toEqual(currentDay.getFullYear());
        });
    });
    describe("creating variables from object properties", () => {
        it("should copy the suurce object values in the variables", () => {
            expect(firstName).toBe("Denis Juan");
            expect(lastName).toBe("Alonso González");
            expect(twitterId).toBe("@denjalonso");
        });
    });
});