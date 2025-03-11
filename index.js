const orderPrompt =
  "Please enter your order. Separate items with commas, no spaces please.";
let myOrder = prompt(orderPrompt); //order entered as string
//console.log(myOrder);

function parseOrder(order) {
  //need to convert to an array
  const arr = order.split(",");
  const yourOrder = {};
  //console.table(arr);

  for (i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (yourOrder[item] === undefined) {
      yourOrder[item] = 0;
    }
    yourOrder[item]++;
  }
  return yourOrder;
  //
}

console.table(parseOrder(myOrder));
