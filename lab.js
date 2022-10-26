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
        avg = avg + x.price;
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
function calcInventoryValue(InventoryItem) {
    var totalValue = 0;
    InventoryItem.forEach(function (x) {
        totalValue += x.quantity;
    });
    return 1;
}
//# sourceMappingURL=lab.js.map