import products from "./products";

const productName: string = "shirt";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "123 Maple Avenue, New York City, New York";

// find the matching item from the inventory
const product = products.find((item) => item.name === productName);

/* Alternative - returns an array so we use [0] to select the first result.
const product = products.filter((item) => item.name === productName)[0]; */

console.log(`Found product ${JSON.stringify(product)}`);

if (!product) {
  throw new Error("Product not found");
}

const preOrder = product.preOrder.toLowerCase() === "true";

// check if item is on preOrder and notify user if so.
if (preOrder) {
  console.log("We'll notify you once the item has been despatched");
}
