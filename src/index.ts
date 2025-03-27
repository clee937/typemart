import products from "./products";

const productName: string = "shirt";

// find the matching item from the inventory
const product = products.find((item) => item.name === productName);

/* Alternative - returns an array so we use [0] to select the first result.
const product = products.filter((item) => item.name === productName)[0]; */

console.log(`Found product ${JSON.stringify(product)}`);

const preOrder = product?.preOrder.toLowerCase() === "true";

// check if item is on preOrder and notify user if so.
if (preOrder) {
  console.log("We'll notify you once the item has been despatched");
}
