// #region truthyExtractor helpers
let testObj = { firstName: "Theo", middleName: "", lastName: "Gerrard" }

function onlyTruthy(obj) {
    for(let prop in obj) {
        if (!obj[prop]) return false
    }
    return true
}
// #endregion

describe("loops.js", () => {
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
    describe("letterChecker Function", () => {
       it("returns a string", () => {
          chai.assert.isString(letterChecker('qrsuv'), "The return type must be a string.")
       })
       it("returns the missing letter", () => {
          chai.assert.strictEqual(letterChecker('qrsuv'), 't', "You must return the missing letter.")
       })
       it('returns "no missing letters" if all letters are accounted for', () => {
          chai.assert.strictEqual(letterChecker('cdefghi'), 'no missing letters', "If all letters are account for, return 'no missing letters'")
       })
    })
})