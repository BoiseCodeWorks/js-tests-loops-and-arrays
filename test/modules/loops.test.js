// #region truthyExtractor helpers
let testObj = { firstName: "Theo", middleName: "", lastName: "Gerrard" }

function onlyTruthy(obj) {
    if (typeof obj == "undefined") return false
    for(let prop in obj) {
        if (!obj[prop]) return false
    }
    return true
}
// #endregion

describe("loops.js", () => {
    describe("loopSyntax Function", () => {        
       it("doesn't return until the loop has completed counting down", function() {
           chai.assert.isTrue(loopSyntax(), "Count down from 10,000,000 before you return.")
       })
    })
    describe("rangeTotal Function", () => {
        it("returns a number", () => {
            chai.assert.isNumber(rangeTotal(1,3), "The return type must be a number.")
        })
        it("returns the correct sum", () => {
            chai.assert.strictEqual(rangeTotal(2,6), 20, "Sum the range inclusive.")
        })
    })
    describe("truthyExtractor Function", () => {
        it("returns an object", () => {
           chai.assert.isObject(truthyExtractor(testObj), "The return type must be an object.")
        })
        it("Returns a new object with only truthy values", () => {
           chai.assert.isTrue(onlyTruthy(truthyExtractor(testObj)), "The return object should only contain truthy values.")
        })
    })
})