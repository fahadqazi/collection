function createInvoice(invoiceNumber) {
  return {
    invoiceNumber,
    items: []
  };
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function addItem(invoice, quantity, itemPrice, description) {
  const newInvoice = clone(invoice);
  newInvoice.items.push({
    quantity,
    itemPrice,
    description
  });
  return newInvoice;
}

function calculateSum(invoice) {
  const reducer = (acc, item) => acc + item.quantity * item.itemPrice;
  return invoice.items.reduce(reducer, 0);
}

var invoice1a = createInvoice(1);
console.log("invoice1a: ", invoice1a);

var invoice1b = addItem(invoice1a, 2, 10, "t-shirt");
console.log("invoice1b: ", invoice1b);

var invoice1 = addItem(invoice1b, 3, 25, "bag");
console.log("invoice1: ", invoice1);

var resultOne = calculateSum(invoice1);

console.log("result one: ", resultOne);

