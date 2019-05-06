// #region truthyExtractor helpers
let testObj = { firstName: "Theo", middleName: "", lastName: "Gerrard" }

function onlyTruthy(obj) {
    if (typeof obj == "undefined") return false
    for (let prop in obj) {
        if (!obj[prop]) return false
    }
    return true
}
// #endregion

describe("loops.js", () => {
    describe("1. loopSyntax Function", () => {
        let loopSyntax = window["loopSyntax"]
        it("doesn't return until the loop has completed counting down", function () {
            chai.assert.isTrue(loopSyntax(), "Count down from 10,000,000 before you return.")
        })
    })
    describe("2. rangeTotal Function", () => {
        let rangeTotal = window["rangeTotal"]
        it("returns a number", () => {
            chai.assert.isNumber(rangeTotal(1, 3), "The return type must be a number.")
        })
        it("returns the correct sum", () => {
            chai.assert.strictEqual(rangeTotal(2, 6), 20, "Sum the range inclusive.")
        })
    })
    describe("3. truthyExtractor Function", () => {
        let truthyExtractor = window["truthyExtractor"]
        it("returns an object", () => {
            chai.assert.isObject(truthyExtractor(testObj), "The return type must be an object.")
        })
        it("Returns a new object with only truthy values", () => {
            chai.assert.isTrue(onlyTruthy(truthyExtractor(testObj)), "The return object should only contain truthy values.")
        })
    })
    describe("4. findById Function", () => {
        let findById = window["findById"]
        it("returns an object", () => {
            chai.assert.isObject(findById(1), "The return type must be an object.")
        })
        it("returns the complete user object with the target id", () => {
           chai.assert.hasAllKeys(findById(17), {id: 17, name: 'St. MaryLou de la Playa Carmen'}, "Return the complete user object with the matching id.")
        })
        it("returns an object containing an error message if no matching user", () => {
           chai.assert.hasAllKeys(findById(1000), { error: "No user with that id." }, "Return an object with an error message if no user found with the target id.")
        })
    })
    describe("5. bandMemberDetails Function", () => {
       let bandMemberDetails = window["bandMemberDetails"]
       it("returns a string", () => {
          chai.assert.isString(bandMemberDetails("Kris"), "The return type must be a string.")
       })
       it("returns a correctly formatted string with details of the correct band member", () => {
          chai.assert.strictEqual(bandMemberDetails("Kris"), "Kris is in the band and plays the guitar", "Use string concatenation or interpolation to populate your return string with the correct info.")
       })
       describe("Stretch Goal", () => {
        it("still returns properly if only part of the name is given (case insensitive)", () => {
            chai.assert.strictEqual(bandMemberDetails("John"), "Johnny P is in the band and plays the sax", "The .includes() method could help with this challenge.")          
         })
       })
    })
})