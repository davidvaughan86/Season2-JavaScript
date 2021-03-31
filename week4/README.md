# JavaScript

const stone = pebble
let stone = boulder
var stone = rock

3 uses of declaring a variable. ES6 for let and const. Scope for Var and Let. Const is global. Var can be used for the netire function and will reassign the data

# for loops

define the function, pass the arguments

function test () {

}

within the brackets is what you want to happen during the function

for loos require 3 arguments. Define the array, define the loop condition, then the incrementer

for (let slice = 0, slice < pizza.length; index++)

# return

return returns what is done in the function. then call the function with function()


# console log 
prints

## example
        # define the array
let array = [1,2,3]
        # set your function
function sumNumbers () {
        # define your for loop for looping
    for (let num = 0; num < array.length; number ++)

    }
console.log(number);
return number1+number1;
    
}
console.log('this is the sum' sumNumbers(1,2))

# arrays and dictionaries

 let aDictionary = {:}
 let anArray=[]

 using [index] to print from an array
 using dot.notation to print from an object

 using [] and dot notation to access the objects in the arrays

const nested = {}.{}[1].{}[0]
this is the object's, object's 2nd indice of the object's 1st indice.

# string interoplation

using backticks with cash curley
let a = b
let c = d
console.log(`${a} is not ${b})

# for loops

for in is for objects
for of is for arrays

const pizza = {
    crust:'thin',
    toppings:['cheese', 'pepporonir', 'spinach', 'onion', 'anchovies', 'feta', 'seaweed', 'cream cheese', '
'mushroom', 'pineapples', 'quinoa', 'tofu'],
size:'large',
sauce:['marinara, 'alfredo']
}

# if conditions

if (condition) {
},else if (condiion) {

},else (condtion){}

# DOM MINIUPLATION

document. 

using document.getElementById and other 'get' will target the ID, Tag, or Class

using querySelector and querySelectorAll

selector will return the first one
the second will return all.

all are returned as Node List
a node list can be iterated over

scriptt tags for typing JS under the body of the HTML

getElementById
getElementsByClass
getElementsbyTagName

storing the elementment in a variable and using dot notation to modify the element or object.

using the createElement('') we can add new elements to the doc

const heading = document.getElementById('mainHeader')
    console.log(heading.innerText)
    heading.innerText = 'he is how old?'
    console.log(heading.innerText)
    heading.style.color='pink'

populate that new element with text using innerText

const newListItem = document.createElement('li')
    newListItem.innerText = 'returns'
    console.log(newListItem)

// create a new list with createElement('li')
    const newListItem = document.createElement('li')
    // add text to the document with dot notation
    newListItem.innerText = 'returns'
    console.log(newListItem)

// grab the element by its ID
    const list = document.getElementById('list')
    console.log(list)
// using dot notation on the element ID name to append a child
    list.append(newListItem)

// creating two new elements div and p
    const newDiv = document.createElement('div')
    const newPara = document.createElement('p')
    // appened the child to the parents with dot notation
    newDiv.append(newPara)
    newPara.innerText = 'hello this is working'
// grab the div to target by the ID
    const root = document.getElementById('mainContainer')
// use append to attach the child to the grabbed element by its varible name
    mainContainer.append(newDiv)

// you can append multiple elements to a parent at a time