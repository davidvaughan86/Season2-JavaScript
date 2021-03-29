// hello = "Hello World";
// integer = 2
// boolean = False

// while (pizza < 8):
//     print("pizza")

// for slice in pizza:
//     print(slice)

// Define a variable
// var variable, has a functional scope, function scope
var hello = "Hello World";
// ES6, let has a block scope
let integer = 2;
// constant, has a block scope as well
const boolean = false;

// def sum(num1,num2):
//     return num1 + num2
console.log('====================')
function sumNumbers(num1, num2) {
  // function body, aka inside the curlies
  //   var joesName = "Joe"

  // lexical scoping, variables declared outside or inside of a function
  // are accessible to children of that function, as long as the variable
  // is defined outside of the child function

  // variables defined inside a function, can only exist inside that function.

  let number = 9;
  let array = [1, 2, 3];

  // for loop syntax
  // for (first arg: variable we define, we initialize to 0)
  // for (second arg: our loop condition, is your loop container)
  // for (third arg: incrementer)
  for (let loopNumber = 0; loopNumber < array.length; loopNumber++) {
    //    does stuff here
    console.log("inside the loop", number);
  }
  return num1 + num2;
}

// console.log(number);
console.log("this is the sum", sumNumbers(1, 2));
console.log('====================')
// Lis....jk arrays
// list = []
// javascript syntax for a list (now called an Array)
let numbersInAnArray = [1, 2, 3];
let namesInAnArray = [
  "kendall",
  "gill",
  "joey",
  "carlo",
  "tay",
  "taylor",
  "whitney",
  "jessica",
];
// we access them the same way we do in python
// nameOfTheList[index]

// prints out "gill":
console.log(namesInAnArray[1]);

// prints out "tay"
console.log(namesInAnArray[4]);

// prints out "jessica"
console.log(namesInAnArray[7]);

// python dictionary
//  dictionary1 = {"key":"value"}
console.log('====================')
// new syntax, we now call this an object, that has a key value.  the key is not in quotation marks
// the value can be whatever value type we want
let object = { key: "value" };
// console.log(namesInAnArray[7]);
let classObject = {
  name: "kendall",
};
// prints out "kendall"
// console.log(classObject.name)

let complexObject = {
  jessica: {
    name: "jessica",
    hometown: "Houston",
  },
  whitney: {
    name: "whitney",
    hometown: "Houston",
  },
  tay: {
    name: "tay",
    hometown: "Houston",
  },
  joey: {
    name: "joey",
    hometown: "Houston",
  },
  michael: {
    name: "michael",
    hometown: "Houston",
  },
};

// we can reassign values for keys by just calling the key and giving it a new value
// complexObject.michael.hometown = "not houston";

//we can access values of an object by referencing their keys with dot notation


// for in is for objects
// for of is for arrays
console.log('====================')

console.log(classObject.name);
console.log(complexObject.michael.hometown);


//determine two objects. the empty object and the actual object

const pizzas = {
                crust:'thin',
                toppings:['cheese', 'pepparoni', 'spinach', 'onion', 'anchovies', 'feta', 'seaweed', 'cream cheese', 'mushroom', 'pineapples', 'quinoa', 'tofu'],
                size:'large',
                sauce:['marinara', 'alfredo']
      
}
// for ( variable of empty object IN actual object) { } 
for (const pizza in pizzas){
    console.log(`this is the key ${pizza}`) // looping the keys
    console.log(`this is the value of ${pizzas[pizza]}`) // looping the value by doing Object.key in form of object[keys]
    console.log('====================')
   // using Object.keys() to see the value of the object
    console.log(Object.keys(pizza))
    console.log(`these is the toppings ${pizzas.toppings}`)
}
console.log('====================')

// using FOR OF in an object. 
// LET SINGLE-VARIABLE of OBJECT.KEY print SINGLE VARIABLE
for (const topping of pizzas.toppings) {
    console.log(topping)
}


console.log('====================')
// defined array
let cars = ['audi', 'benz', 'mercedes', 'landrover']
// for SINGULAR-OBJECT of PLURAL-OBJECT
for (const car of cars) {
    console.log(`this is a ${car}`)
    // use [] to print the value of an array
    console.log(`this is the best ${cars[0]}`)
}

console.log('====================')

let age = 5;
if (age<5) {
    console.log('you are too young')
}else {
    console.log('you are getting old')
}
console.log('====================')

let playerHeight = 7;
if (playerHeight < 4) {
    console.log('play point guard');

}else if (playerHeight < 6 && playerHeight > 5.5) {
    console.log('bench')
} else {
    console.log('center')
}

console.log('====================')

const dantesHashOfInferno = {
    level1: {
      name: 'Limbo',
      contents: [1, 2, 3, 4, 5, 6, 7, 89, 9, 57, 345, 2, 4123, 4423, 4, 234, 24],
    },
    level2: {
      name: 'Lust',
      contents: [12, [56, 56, 56], "swag"],
    },
    level3: {
      name: 'Gluttony',
      contents: [{ volume: 92, sanctum: "lorem ipsum", tower: ["crown"] }],
    },
    level4: {
      name: 'Greed',
      contents: [{ fourth: "fourth", number4: 4 }],
    },
    level5: {
      name: 'Anger',
      contents: [
        {
          reee: 92,
          reelorum: "latin for ree",
          reeeeeee: ["angryreeeee", { anger: "you need to calm down" }],
        },
      ],
    },
    level6: {
      name: 'Heresy',
      contents: [],
    },
    level7: {
      name: 'Violence',
      contents: [],
    },
    level8: {
      name: 'Fraud',
      contents: [],
    },
    level9: {
      name: 'Treachery',
      contents: [
        {
          volume: 92,
          sanctum: "lorem ipsum",
          tower: [
            {
              reee: 92,
              reelorum: "latin for ree",
              reeeeeee: [
                "angryreeeee",
                {
                  anger: "you need to calm down",
                  secret: [
                    { theSecretIs: "Joe is sorry he gave you this exercise" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };
console.log(Object.keys(dantesHashOfInferno['level 1']))