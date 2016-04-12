import {primary, secondary, tertiary} from "../src/destructuring";

describe("destructuring", () => {
    describe("creating variables from array elements", () => {
       it("should set variables without assign to array elements", () => {
           expect(primary).toBe("red");
           expect(secondary).toBe("green");
           expect(tertiary).toBe("blue");
       })
    });
});