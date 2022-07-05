//First
function oddOrEven(num) {
  if (typeof num === "number") {
    if (num % 2 == 0) {
      console.log("This number is even");
    } else {
      console.log("This number is odd");
    }
  } else {
    console.log("Please enter a number");
  }
}
oddOrEven(12);
oddOrEven(11);
oddOrEven("asd");

//Second
function rect(first, second) {
  return first * second;
}
console.log(rect(5, 6), "Rectangle area");

//Third
function square(side) {
  return side ** 2;
}
console.log(square(5), "Square area");

//Fourth
function random() {
  return Math.floor(Math.random() * 101);
}
console.log(random(), "Randomizer");

//Fifth
function getCurrencySymbolFromCode(money) {
  if (money === "USD" || money === "EUR" || money === "GEL") {
    if (money === "USD") {
      console.log("$");
      return "$";
    } else if (money === "EUR") {
      console.log("€");
      return "€";
    } else {
      console.log("₾");
      return "₾";
    }
    {
    }
  } else {
    console.log("Please choose between USD, EUR or GEL");
  }
}
getCurrencySymbolFromCode("GEL");

//Sisxth
let myArray = [
  {
    name: "Giorgi",
    age: 30,
  },
  {
    name: "Ana",
    age: 25,
  },
  {
    name: "Salome",
    age: 45,
  },
  {
    name: "Irakli",
    age: 27,
  },
  {
    name: "Saba",
    age: 32,
  },
];

// function youngest(arr) {

// }

let myAgearray = [];
myArray.forEach((element) => {
  myAgearray.push(element.age);
});

myAgearray.sort(function (a, b) {
  return a - b;
});
console.log(myAgearray[0], "Youngest");
