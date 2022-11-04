var arrText = new Array;
const collection = document.getElementsByClassName("mshXob");
for (let i = 0; i < collection.length; i++) {
  arrText.push(collection[i].textContent);
}
for (let j = 0; j < arrText.length; j++) {
  var number = Number(arrText[j].replace(/[^0-9.-]+/g,""));
  arrText[j] = number/100;
}
const totalAmount = arrText.reduce((partialSum, a) => partialSum + a, 0);
alert('Montant total dépensé : ' + totalAmount.toFixed(2) + '€')
