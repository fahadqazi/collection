class Invoice {
  constructor(invoiceNumber) {
    this._invoiceNumber = invoiceNumber;
    this._items = [];
  }

  addItem(quantity, itemPrice, description) {
    this._items.push({
      quantity,
      itemPrice,
      description
    });
  }
  get sum() {
    let sum = 0;
    for (var i = 0; i < this._items.length; ++i) {
      let item = this._items[i];
      sum += item.quantity * item.itemPrice;
    }
    return sum;
  }
}

const invoice1 = new Invoice(1);
const invoice2 = new Invoice(2);

invoice1.addItem(2, 10, "t-shirt");
invoice1.addItem(3, 25, "bag");

invoice2.addItem(10, 1, "light blub");
invoice2.addItem(2, 10, "Pillow");

console.log("Invoice Sum: ", invoice1.sum);
console.log("Invoice2 Sum: ", invoice2.sum);
