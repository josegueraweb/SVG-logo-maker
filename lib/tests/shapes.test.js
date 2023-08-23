const Shapes = require("../shapes.js");


describe(Shapes, () => {
    describe(render, () =>{
        test("Should throw an error when called.", () => {
            // arrange
            const shapes = new Shapes(); 
            const err = "Child class must implement render() method."

            // act 

            // assert
            expect(comp.render).toThrow(err);
        })
    })
}) 