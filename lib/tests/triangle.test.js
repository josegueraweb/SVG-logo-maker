const Triangle = require("../triangle.js");


describe(Triangle, () => {
    describe(render, () =>{
        test("Should throw an error when called.", () => {
            // arrange
            const triangle = new Triangle();

            // act 
            const result = triangle.render();

            // assert
            expect(result).toEqual();
        })
    })
}) 

