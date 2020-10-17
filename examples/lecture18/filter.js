  var numberArray = [1,2,3,4,5,6,7,8,9,10];
  console.log(numberArray);

  function greaterThanFive(value){
    return value > 5;
  }
  var filteredArray = numberArray.filter(greaterThanFive);
  console.log(filteredArray);

  var shoppingList = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
  ];
  console.log(shoppingList);
  function bismolFilter(value){
    return value.indexOf('Bismol') != -1;
  }
  var filteredShoppingList = shoppingList.filter(bismolFilter);
  console.log(filteredShoppingList);
