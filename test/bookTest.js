const assert = require("chai").assert;
const { readInput, startOverOptions } = require("../utils")
const { bookLending,
    introduction,
    startOver,
    firstQ,
    borrowBook,
    newBookQuestion,
    calcTime,
    returnBook,
    areyousure,
    goback } = require("../book");



describe("App", function () {
    it("should make the app run when called", function () {
        assert.equal(bookLending(), "works")
    })
})

describe("App functionalities", function () {
    it("should display initial options", function () {
        return introduction().then(res => {
            assert.equal(res, "works")
        })
    })




    it("should start the app all over if option selected is wrong", function () {
        return startOver().then(res => {
            assert.equal(res, "works")
        })
    })



    it("should borrow a book", function () {
        const result = borrowBook()
        assert.equal(result, "returns")
    })

    it("should ask questions about the new boook", function () {
        return newBookQuestion().then(res => {
            assert.equal(res, "new book added")
        })
    })

    it("should return the selected book", function () {
        return returnBook().then(res => {
            assert.equal(res, "returned")
        })
    })

})
