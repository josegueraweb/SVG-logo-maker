const Square = require("../square.js");


describe(Square, () => {
    describe(render, () =>{
        test("Should throw an error when called.", () => {
            // arrange
            const square = new Square();

            // act 
            const result = square.render();

            // assert
            expect(result).toEqual();
        })
    })
}) 

