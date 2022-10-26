//TALLEST MOUNTAIN
interface Mountain {
    name: string;
    height: number;
}
let mountainOne = {
    name: "Kilimanjaro",
    height: 19341
}
let mountainTwo = {
    name: "Everest",
    height: 29029
}
let mountainThree = {
    name: "Denali",
    height: 20310
}

let mountains: Mountain[] = [mountainOne, mountainTwo, mountainThree]


function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallestMountain: Mountain = mountains[0];
    mountains.forEach(x => {
        if (x.height > tallestMountain.height) {
            tallestMountain = x;
        }
    });
    return tallestMountain.name;
}
let x = findNameOfTallestMountain(mountains)
console.log(x)
//PRODUCTS
interface Product {
    name: string;
    price: number;
}
let productOne = {
    name: "motor",
    price: 10.00
}
let productTwo = {
    name: "sensor",
    price: 12.50
}
let productThree = {
    name: "LED",
    price: 1.00
}

let products: Product[] = [productOne, productTwo, productThree]
function calcAverageProductPrice(products: Product[]): number{
    let avg = 0;
    products.forEach(x => {
        avg += x.price
    })
    avg = avg / products.length;
    return avg;
}
let y = calcAverageProductPrice(products)
console.log(y)
//INVENTORY
interface InventoryItem {
    product: Product;
    quantity: Number;
}
let iiOne = {
    product: productOne,
    quantity: 10.0
}
let iiTwo = {
    product: productTwo,
    quantity: 4.0
}
let iiThree = {
    product: productThree,
    quantity: 20.0
}

let inventory: InventoryItem[] = [iiOne, iiTwo, iiThree]
function calcInventoryValue(inventory: InventoryItem[]): number{
    let totalValue = 0;
    inventory.forEach(x => {
        totalValue += (x.product.price * x.quantity)
    })
    return totalValue;
}

let z = calcInventoryValue(inventory)
console.log(z)