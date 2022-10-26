var mountainOne = {
    name: "Kilimanjaro",
    height: 19341
};
var mountainTwo = {
    name: "Everest",
    height: 29029
};
var mountainThree = {
    name: "Denali",
    height: 20310
};
var mountains = [mountainOne, mountainTwo, mountainThree];
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains[0];
    mountains.forEach(function (x) {
        if (x.height > tallestMountain.height) {
            tallestMountain = x;
        }
    });
    return tallestMountain.name;
}
var x = findNameOfTallestMountain(mountains);
console.log(x);
var productOne = {
    name: "motor",
    price: 10.00
};
var productTwo = {
    name: "sensor",
    price: 12.50
};
var productThree = {
    name: "LED",
    price: 1.00
};
var products = [productOne, productTwo, productThree];
function calcAverageProductPrice(products) {
    var avg = 0;
    products.forEach(function (x) {
        avg += x.price;
    });
    avg = avg / products.length;
    return avg;
}
var y = calcAverageProductPrice(products);
console.log(y);
var iiOne = {
    product: productOne,
    quantity: 10.0
};
var iiTwo = {
    product: productTwo,
    quantity: 4.0
};
var iiThree = {
    product: productThree,
    quantity: 20.0
};
var inventory = [iiOne, iiTwo, iiThree];
function calcInventoryValue(inventory) {
    var totalValue = 0;
    inventory.forEach(function (x) {
        var a = x.product.price;
        var b = x.quantity;
        var c = a * b;
        console.log(a);
        console.log(b);
    });
    return 1;
}
calcInventoryValue(inventory);
//# sourceMappingURL=lab.js.map