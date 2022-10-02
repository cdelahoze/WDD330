
const note = document.getElementById('note')

note.innerHTML += `<p> This week I wanted to use codes instead of notes to practice. 
Please, it is important to see the main.js file where the annotations and codes are.
<br>
<br>
I'm just handing out the notes for the Items Chapter. But I'm going to keep doing the next chapters.
</p>`

//Objects are a collection of key-value pairs placed inside curly braces {}.

//Objects have properties that can be any JavaScript value. If it’s a function, it’s known as a method.

const person = {
    firstName:"Cristian",
    lastName:"De La Hoz",
    age: 59,
    eyeColor: "blue",
    //Nested Objects
    myChild: {
        child1: "Cristian Jr",
        child2: "Daniel",
        child3: "Helena"
    },
    //Nested Arrays and Objects
    //Nested objects can be created by placing objects inside objects.
    myGrandChild: 
    [{child: "Cristian Jr", grandChild:["Juan Esteban", "Emma"]},
    {child: "Daniel", grandChild:["Daniela", "Martina"]},
    {child: "Helena", grandChild:["Mariana"]}
    ], 
    //method
    fullName: function() {
        return this.firstName + " " + this.lastName;
    
    }
};

//An object’s properties and methods can be accessed using either dot notation or square bracket notation.


document.getElementById("fname").innerHTML = "My name is: " +  person.fullName();

let x = "";

for (let i in person.myGrandChild) {
    x += "<h2>" + person.myGrandChild[i].child + "</h2>";
    for (let j in person.myGrandChild[i].grandChild) {
      x += person.myGrandChild[i].grandChild[j] + "<br>";
    }
  }
  
document.getElementById("gchild").innerHTML = x;

//Objects are mutable, which means their properties and methods can be changed or removed.

delete person.age;
person.nationality = "Colombian";

document.getElementById("mutable").innerHTML = "My nationality is: " +  person.nationality + "<br>" +"My age is: " + person.age;

//Objects can be used as parameters to functions, which allows arguments to be entered in any order, or omitted.

function greet({greeting, firstName, nationality}) {
    return `${greeting} My name is ${firstName} and, I am ${nationality}`;
    }

document.getElementById("greeting").innerHTML = greet({greeting : `Hello`, firstName: person.firstName, nationality: person.nationality});

//JSON is a portable data format that uses JavaScript object literals to exchange information.

        //JSON.stringify converts dates into strings:

        person.today= new Date();

document.getElementById("json").innerHTML = JSON.stringify(person); //JSON.stringify will not stringify functions:


//The object gives access to a number of mathematical constants.Math

document.getElementById("constants").innerHTML = 
Math.PI +  " //The ratio of the circumference and diameter of a circle" + "<br>" +
Math.SQRT2 + " //The square root of 2" + "<br>" + 
Math.SQRT1_2 + " //The reciprocal of the square root of 2"  + "<br>" + 
Math.LN2 + " //The natural logarithm of 2" + "<br>" + 
Math.LN10 + " //The natural logarithm of 10" + "<br>" + 
Math.abs(-3) + " //Absolute Values" + "<br>" + 
Math.ceil(4.2) + " //Rounding Methods, round a number up " + "<br>" + 
Math.floor(4.2) + " //Rounding Methods, round a number down " + "<br>" + 
Math.trunc(4.9) + " //returns the integer-part of a number " + "<br>" + 
Math.pow(27, 1/3) + " //The method returns the positive square root of a number" + "<br>" + 
Math.cbrt(8) + " //returns the cube root of numbers" + "<br>" 
; 


//The object can be used to perform mathematical calculations.Math

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
    }

document.getElementById("dice").innerHTML = dice.roll();


const myMaths = {

    square(x) {
        return x * x;
        }
    };
const y = Math.random() * 10
document.getElementById("math").innerHTML = "Square of " + y.toFixed(0) + " Is: "+ myMaths.square(y.toFixed(0));

const myStats = {

    mean(array,callback) {
        if (callback) {
        array.map( callback );
        } 
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
    };

document.getElementById("stats").innerHTML = myStats.mean([1,2,3,4,4,5,5,5,3,4,2]);

//The object can be used to create date objects.Date

const today = new Date();
today.toString();
const christmas = new Date('2017 12 25');
christmas.toString();

//Once you’ve created a object, you can use the getter methods to access information about that date.Date

diwali.getDay()
diwali.getFullYear()
diwali.getTime();

//Once you’ve created a object, setter methods can be used to change information about that date.Date



//The object can be used to create regular expressions.Regex

const pattern = new RegExp('[a-zA-Z]+ing');

pattern.test('joking');