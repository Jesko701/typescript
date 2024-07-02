"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// * Generics Function = used for locking the return value
function identityThree(val) {
    return val;
}
// identityThree(3);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({ brand: "testing", type: 123 });
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
