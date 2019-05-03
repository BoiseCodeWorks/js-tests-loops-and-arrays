describe("arrays.js", () => {
   describe("largestNum Function", () => {
      it("returns a number (or object if attempting the stretch goal)", () => {
         chai.assert.isTrue(typeof largestNum([1,2,3]) == "number" || typeof largestNum([1,2,3]) == "object", "The return type must be a number or an object if attempting the stretch goal.")
      })
      it("returns the largest number", () => {
         chai.assert.strictEqual(largestNum([10,12,3,2,42]), 42, "Find and return the largesgt number within the array.")
      })
      describe("Stretch Goal", () => {
         it("if there's duplicates then return an object with the large number as the key and the amount of duplicates as the value", () => {
            chai.assert.propertyVal(largestNum([23,12,4,6,23,23,23,13]), "23", 4, "Should return an object like: { largestNum: numberOfOccurances }")
         })
      })
   })
   describe("elemsTimesLength Function", () => {
      it("returns an array", () => {
        chai.assert.isArray(elemsTimesLength([3]), "The return type must be an array.")         
      })
      it("modifies every element correctly", () => {
        chai.assert.includeOrderedMembers(elemsTimesLength([4, 2, 1, 7]), [16, 8, 4, 28], "Returns an array containing modified elements of the given array.")
      })
   })
   describe("arrayFlattener Function", () => {
      it("returns an array", () => {
         chai.assert.isArray(arrayFlattener([3]), "The return type must be an array.")
      })
      it("returns a single dimension array of only primitive elements", () => {
         chai.assert.includeOrderedMembers(arrayFlattener([[['legume'], 3, []], 2, ['tree', [{}, [5]]]]), ['legume', 3, 2, 'tree', 5], "Return a single dimension array of only primitives.")
      })
   })
})