import {multiply} from "/multiply.js";

test("multiply", ()=>{
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(4, 3)).toEqual(12);

    expect(multiply(-4, 2)).toEqual(-8);
    expect(multiply(-4, -4)).toEqual(16);


    expect(multiply(0, 0)).toEqual(0);
});