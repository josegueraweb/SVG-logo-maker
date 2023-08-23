const Circle = require("../circle.js");


describe(Circle, () => {
    describe(render, () =>{
        test("Should throw an error when called.", () => {
            // arrange            
            const circle = new Circle();

            // act 
            const result = circle.render();

            // assert
            expect(result).toEqual();
        })
    })
}) 



