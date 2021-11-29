const assert = require("chai").assert;

const { bookLending,
    introduction,
    startOver,

    borrowBook,
    newBookQuestion,

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

    it("should ask if you're sure of your choice", function () {
        return areyousure().then(res => {
            assert.equal(res, "yes")
        })
    })

    it("should go back", function () {
        return goback().then(res => {
            assert.equal(res, "back")
        })
    })



})
