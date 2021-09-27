// https://developer.mozilla.org/es/docs/Web/JavaScript

// - 2 Writing JavaScript -

/*
alert('hello')
alert('message')
alert('Hi Laurence Svekis')
*/

// - 3 JavaScript and HTML -

// alert('message 1');alert('message 2')

// alert('hello')

// - 4 Comments JavaScript -

// alert('hello')
// Single comment
// alert('test')
// alert('test1') // second popup window
/*
Multi Line
Comment

*/

// - 5 Output Options JavaScript -
// document.write('Laurence Svekis')
// document.getElementById('message').innerHTML = 'Laurence Svekis'
// console.log('Laurence Svekis')

// - 6 Output Action Challenge -

// - 7 JavaScript Variables -

// var myName = 'Laurence Smith'

// alert(myName)
// document.write(myName + '')
// document.getElementById('message').innerHTML = myName
// console.log(myName)

// - 8 Let and Const JavaScript -

/*
let myName = 'Laurence Svekis'

myName = 'Laurence Smith'
if (true) {
	const myName = 'Tester'
	console.log(myName)
}

// alert(myName)
document.write(myName + '')
document.getElementById('message').innerHTML = myName
console.log(myName)
*/

// - 9 Data Types -

/*
let myName = 'Laurence' // String Data Type
// myName = 'Svekis'
// myName = undefined
// myName = null
// let myNum = 1000
// let a, b, c, d
// let boo = true // Boolean
let boo = false // Boolean
// console.log(typeof myName)
// console.log(typeof myNum)
// console.log(typeof a)
// console.log(typeof boo)
if (boo) {
	console.log('Boo is set to TRUE')
}
// alert(myName);
document.write(myName)
document.getElementById('message').innerHTML = myName
console.log(myName)
*/

// - 10 Challenge JavaScript Prompt -
/*
let myName = prompt('What is your name?')
let message = 'Welcome to the page, '
let output = message + myName
console.log(output)
document.write(myName)
document.getElementById('message').innerHTML = myName
console.log(myName)
*/

/* my exercise
let myName = prompt('What is your name?')
let message = 'Welcome to the page, '
let output = message + myName

document.write(output)
document.getElementById('message').innerHTML = myName
console.log(myName)
*/

/*
let person = prompt('Your Name?')
let message = 'Welcome , ' + person
console.log(message)
document.write(message)
document.getElementById('message').innerHTML = message
*/

// - 11 Template Literals -

/*
let message = "It's my Page"
message = "It's my Page"
let output = message + ' Hello World '
let person = 'Laurence Svekis'
let output = message + ' "Hello" World ' + person

message = `It's my Page. ${person}

"Hello World"`

console.log(message)
document.write(message)
document.getElementById('message').innerHTML = message
*/

// - 12 Prompt Challenge -

/*
let question = 'What is your name?'
let userName = prompt(question)
let message = `Welcome, ${userName}`
document.getElementById('message').innerHTML = message
*/

// - 13 Type Conversion and Coercion -

/*
// let myStr = 'Hello '
// let myStr = '100 '
// let myStr = 'World '
let myStr = '1000'
let myNum = 100
// myStr = myStr + myStr
myStr = Number(myStr)
myStr = myStr + myNum
myStr = myStr.toString()
// coercion
// myStr = Number(myStr)
myNum = String(myNum)
console.log(myStr)
console.log(typeof myStr)
console.log(typeof myNum)
*/

// - 14 Type Challenge -

/*
let message = prompt('your number?')
message = Number(message)
let output = message + message
console.log(output)
console.log(typeof message)
*/

// - 15 JavaScript Operators -
/*
let val1 = 5
let val2 = 7
let val3 = 9

// console.log(val2 - val1)
console.log(val2 * val1)
console.log(val3 / 3)
console.log(val3 % 3)
console.log(val2 % 3)
console.log(val1 % 3)
*/

// - 16 JavaScript Assignment Operators -

// let val = 5
// val *= 5

/*
console browser
val 
25

val = val * 5;
125

val
125
*/

/*
val -= 100
25

val /= 5
5

val * val
25

val
5

val*=val
25
*/

// - 17 JavaScript Comparison Operators -

/*
let val = 5
// if (true) {
// 	console.log('was true')
// }

// if (5 == 5) {
// 	console.log('was true')
// }

if (val == val) {
	console.log('was true')
}
*/

// let val1 = 5
// let val2 = 10
// if (val1 == val2) {
// 	console.log('was true')
// }

// let val1 = 5
// let val2 = 10
// let val3 = '5'
// if (val1 == val3) {
// 	console.log('was true')
// }

// let val1 = 5
// let val2 = 10
// let val3 = '5'
// if (val1 === val3) {
// 	console.log('was true')
// }

// let val1 = 5
// let val2 = 10
// let val3 = '5'
// if (val1 != val2) {
// 	console.log('was true')
// }

// let val1 = 5
// let val2 = 10
// let val3 = '5'
// if (val1 !== val3) {
// 	console.log('was true')
// }

// let val1 = 5
// let val2 = 10
// let val3 = '5'
// if (val1 > val2) {
// 	console.log('was true')
// }

// let val1 = 5
// let val2 = 10
// let val3 = '5'
// if (val1 >= val2) {
// 	console.log('was true')
// }

// - 18 Truthy and Falsey -

// let val = undefined
// if (val) {
// 	console.log('was true')
// }

// if (!val) {
// 	console.log('its False')
// }

// let val = 1
// if (val) {
// 	console.log('was true')
// }

// if (!val) {
// 	console.log('its False')
// }

// - 19 Condition Statements -

// let val = 101
// message = 'nothing'
// if (val == 100) {
// 	message = 'yes it was true'
// } else {
// 	message = 'it was FALSE'
// }

// document.getElementById('message').innerHTML = message

// let val = 100
// let message = 'nothing'
// if (val > 100) {
// 	message = 'Greater than 100'
// } else if (val == 100) {
// 	message = 'was equal to 100'
// } else {
// 	message = 'Less than 100'
// }

// document.getElementById('message').innerHTML = message

// let val = 100
// let num = 50
// let message = 'nothing'
// if (val > num) {
// 	message = `${val} was greater than ${num}`
// } else if (val == num) {
// 	message = `${val} was equal to ${num}`
// } else {
// 	message = `${val} is less than ${num}`
// }

// document.getElementById('message').innerHTML = message

// let val = prompt('what number?')
// val = Number(val)
// let num = 100
// let message = 'nothing'
// if (val > num) {
// 	message = `${val} was greater than ${num}`
// } else if (val == num) {
// 	message = `${val} was equal to ${num}`
// } else {
// 	message = `${val} is less than ${num}`
// }

// document.getElementById('message').innerHTML = message

// - 20 Condition Challenge -

// Our application is gonna act as a bouncer of a night club.
// It is gonna check to see if the user, is able to enter the night club.
// So they have to be over 18 to enter in the night club, and then they have  to be over 21 in order to drink. If they are under 18 then there is not gonna get the night entry into the night club

// How old are you?

// Enter a number

// You are > 18 && < 21 and allowed to come but NOT drink.

// You are > 21 and allowed to come in and drink

// You are < 18 not allowed in. Sorry you are only ${age}

// // Own attempt exercise

// let age = prompt('How old are you?')
// if(age === Number){
// 	// response
// } else if (age !== Number) {
// 	console.log('Enter a number')
// } else {

// }

// var lessThanEighteen = (age < 18)
// var equalThanEighteen = (age === 18)
// var moreThanEighteen = (age > 18)
// var lessThanTwentyOne = (age < 21)
// var moreThanTwentyOne = (age > 21)

// let age = prompt('How old are you?')
// if(age === Number){

// 	if(`${lessThanEighteen}`){

// 		console.log(`You are less Than Eighteen and not allowed in. Sorry you are only ${age}`)

// 	} else if(`${equalThanEighteen} && ${lessThanTwentyOne}`){

// 		console.log(`You are ${age} and allowed to come but NOT drink.`)

// 	} else if (moreThanTwentyOne){

// 	}

// 		console.log(`You are ${lessThanEighteen} and not allowed in. Sorry you are only ${age}`)

// var lessThanEighteen = (age < 18)
// var equalThanEighteen = (age === 18)
// var moreThanEighteen = (age > 18)
// var lessThanTwentyOne = (age < 21)
// var moreThanTwentyOne = (age > 21)

// let age = prompt('How old are you?')
// if(age === Number){

// 	if(lessThanEighteen){

// 		console.log(`You are less Than Eighteen and not allowed in. Sorry you are only ${age}`)

// 	} else if(equalThanEighteen && lessThanTwentyOne){

// 		console.log(`You are ${age} and allowed to come but NOT drink.`)

// 	} else{		console.log(`You are ${age} and allowed to come in and drink`) }

// var lessThanEighteen = (age < 18)
// var equalThanEighteen = (age === 18)
// var moreThanEighteen = (age > 18)
// var lessThanTwentyOne = (age < 21)
// var moreThanTwentyOne = (age > 21)

// let age = prompt('How old are you?')
// if(age === Number){

// 	if(lessThanEighteen)

// 		console.log(`You are less Than Eighteen and not allowed in. Sorry you are only ${age}`)

// 	else
// 	if(equalThanEighteen && lessThanTwentyOne)

// 		console.log(`You are ${age} and allowed to come but NOT drink.`)

// 	else
// 		console.log(`You are ${age} and allowed to come in and drink`)

// Exercise solution

// let age = prompt('How old are you?')
// age = Number(age)
// if (!age) {
// 	age = prompt('Enter a Number?')
// }
// let message
// if (age >= 21) {
// 	message = `You are ${age} and allowed to come in and drink.`
// } else if (age >= 18) {
// 	message = `You are ${age} and allowed to come in but NOT drink.`
// } else {
// 	message = `You are NOT allowed in. Sorry you are only ${age}.`
// }

// document.getElementById('message').innerHTML = message

// - 21 Ternary Operator -

/*
let val = 100
*/
/*
let message
if (val > 100) {
	message = `${val} was greater than 100`
} else {
	message = `${val} was LESS or Equal than 100`
}
*/
/*
let message =
	val > 100
		? `${val} was greater than 100`
		: `${val} was LESS or Equal than 100`
console.log(message)
*/

// if the output of the value is gonna be odd or even

// my exercise response

// let val = 100
// let message = val % 2 === 0 ? `${val} is odd` : `${val} is even`
// console.log(message)

// let val = 101
// let message = val % 2 === 0 ? `${val} is odd` : `${val} is even`
// console.log(message)

// Laurence exercise response

// let val = 101

// let check = val % 2 ? `Odd` : `Even`
// check += `${val} is ${check}`
// console.log(check)

// - 22 Logical Operators -

// console.log(5 > 3 && 10 < 20) // true
// console.log(5 > 3 && 10 > 20) // false
// console.log(5 > 3 || 10 > 20) // true
// console.log(5 > 3 || 10 > 20 || 5 > 10) // true
// console.log((5 > 3 && 10 > 20) || 5 > 10) // false
// console.log((5 > 3 && 10 > 20) || 5 < 10) // true

/*
let a = 5
let b = 10
let c = 20
let d = 30
console.log(a > b || b < a) // false
console.log(a > b && b < a) // false
console.log(d > b || b > a) // true
console.log(d > b && b < a) // false
*/

// - 23 JavaScript Switch Statement -

/*
MDN
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}
*/

/*
// let today = 3
let today = prompt('pick a number')
today = Number(today)
let output
switch (today) {
	case 0:
		output = 'Sunday'
		break
	case 1:
		output = 'Monday'
		break
	case 2:
		output = 'Tuesday'
		break
	case 3:
		output = 'Wednesday'
		break
	case 4:
		output = 'Thursday'
		break
	case 5:
		output = 'Friday'
	case 6:
		output = 'Saturday'
		break
	default:
		output = 'Not found'
}

document.getElementById('message').innerHTML = `Today  is ${output}`
*/

// - 24 Switch Friends Challenge -

// let person = 'Laurence'

// Enter a name?

// Laurence
// John

// is my friend
// I don't know ${other}

/*
my exercise attempt response
let person = prompt('Enter a name?')
if (person === Laurence || John || Azucena) {
	person = friend
} else {
	person = other
}

let output
switch (friend) {
	case Laurence:
		output = 'Laurence is my friend'
		break
	case John:
		output = 'John is my friend'
		break
	case Azucena:
		output = 'Azucena is my friend'
		break
	default:
		output = `${other} id not my friend`
}

document.getElementById('message').innerHTML = `${output}`
*/

/*
let person = prompt('Enter a name?')
let message
switch (person) {
	case 'John':
	case 'Larry':
	case 'Jane':
	case 'Laurence':
		message = `${person} is my friend`
		break
	default:
		message = `I don't know ${person}`
}
document.getElementById('message').innerHTML = message
*/

// - 25 JavaScript Functions -

/*
let val = 'test'

function test1() {
	let val = 'test1'
	console.log(val) // 2
}
console.log(val) // 1
test1()
console.log(val) // 3
test1() // 4
*/

/*
let val = 'test'

function test1() {
	val = 'test1'
	console.log(val) // 2
}
console.log(val) // 1
test1()
console.log(val) // 3
test1() // 4
*/

// let val = 'test'
// let num = 0

// function test1() {
// 	num++
// 	// val = 'test1'
// 	console.log(`${val}${num}`) // 2
// }

// console.log(`${val}${num}`) // 1
// test1()
// console.log(`${val}${num}`) // 3
// test1() // 4

/*
let val = 'test'
let num = 0

function test1() {
	add()
	// val = 'test1'
	console.log(`${val}${num}`) // 2
}

function add() {
	num++
}
add()
add()
add()
console.log(`${val}${num}`) // 1
test1()
console.log(`${val}${num}`) // 3
test1() // 4
*/

// - 26 JavaScript Function Parameters -

/*
let a = 5
let b = 10

function add(a) {
	console.log(a)
}

add(a)

console.log(add(50))
console.log(a)
*/

// let a = 5
// let b = 10
// let total = 0

// function add(val1) {
// 	total += val1
// 	console.log(val1)
// 	console.log(total)
// }

// add(a)

// console.log(add(500))
// console.log(total)

// let a = 5
// let b = 10
// let total = 0

// function add(val1, val2) {
// 	total += val1 * val2
// 	console.log(total)
// }

// add(a, b)
// add(50, 40)

/*
let a = 5
let b = 10
let total = 0

function add(val1 = 1, val2 = 1) {
	// val2 = val2 || 1
	// val2 = val2 == undefined ? 0 : val2
	console.log(val2)
	total += val1 * val2
	console.log(total)
}

add(0, 0)
add(50)
*/

// - 27 JavaScript Function Return -

/*
function adder(a, b) {
	console.log(a, b)
	let total = a * b
	return total
}

console.log(adder(5, 5))
*/

/*
function adder(a = 1, b = 1, c = 1) {
	console.log(a, b, c)
	let total = a * b * c
	return total
}

console.log(adder(1, 2, 3))
let val1 = adder(4, 10)
console.log(val1)
*/

/*
function add(a, b) {
	return a + b
}
function subtract(a, b) {
	return a - b
}
function multiply(a, b) {
	return a * b
}
function divide(a, b) {
	return a / b
}
console.log(add(5, 5))
console.log(subtract(5, 5))
console.log(multiply(5, 5))
console.log(divide(5, 5))
*/

// - 28 Function Expression -

/*
let val1 = funDec(100)
console.log(val1)
function funDec(a) {
	return a * a
}

let val2 = funExp(100)
console.log(val2)
const funExp = function (a) {
	return a * a
}
*/

/*
const funExp = function (a) {
	return a * a
}
let val2 = funExp(100)
console.log(val2)

console.log(funExp)
// console.log((funExp = 100)) // script.js:824 Uncaught TypeError: Assignment to constant variable.
*/

/*
let funExp = function (a) {
	return a * a
}
let val2 = funExp(100)
console.log(val2)

console.log(funExp)
// console.log((funExp = 100))
// console.log(funExp)
// console.log(typeof funExp) // number
console.log(typeof funExp) // function
*/

/*
let val1 = function (num) {
	return num + 5
}
function val2(num) {
	return num + 5
}
console.log(val1(10))
console.log(val2(10))
*/

// - 29 Function Scope -

/*
let total = 0

adder()
console.log(total)
function adder() {
	total++
}
*/

/*
function cal(a, b) {
	mul(a, b)
	add(a, b)
	subt(a, b)

	function mul(a, b) {
		console.log(a * b)
	}
	function add(a, b) {
		console.log(a + b)
	}
	function subt(a, b) {
		console.log(a - b)
	}
	return total
}

console.log(cal(5, 5))
*/

/*
console.log(cal(5, 10))

function cal(a, b) {
	let total = 0
	total = +mul(a, b)
	total = +add(a, b)
	total = +subt(a, b)

	function mul(a, b) {
		return a * b
	}
	function add(a, b) {
		return a + b
	}
	function subt(a, b) {
		return a - b
	}
	return total
}
*/

/*
console.log(cal(5, 10))

function cal(a, b) {
	let total = 0
	total += mul(a, b)
	total += add(a, b)
	total = total + subt(a, b)

	function mul(a, b) {
		return a * b
	}
	function add(a, b) {
		return a + b
	}
	function subt(a, b) {
		return a - b
	}
	return total
}
*/

/*
let total = 0
let a = 1000
let b = 1000

adder()
console.log(total)
function adder() {
	total++
}

console.log(cal(5, 10))

function cal(a, b) {
	let total = 0
	total += mul()
	total += add()
	total = total + subt()

	function mul(a, b) {
		return a * b
	}
	function add(a, b) {
		return a + b
	}
	function subt(a, b) {
		return a - b
	}
	return total
}
*/

// - 30 Function closures -
/*
let val = 1000

function test() {
	const secret = 12345
	return function inner() {
		console.log(`Secret number ${secret}`)
	}
}

const output = test()
output()

const secret2 = function (val) {
	const namez = function () {
		return val
	}
	return namez
}

let secretVal = secret2('Laurence')
console.log(secretVal())
*/

// - 31 Function Recursion -

/*
let start = 100
function loop(val) {
	console.log(val)
	if (val < 1) {
		return
	}
	loop(val - 1)
}

// console.log(loop(5))

// console.log(loop(50))

function loop1(val) {
	console.log(val)
	if (val > 0) {
		val--
		loop1(val)
	}
	return 'end'
}

loop1(5)
*/

// - 32 Number Guesser Challenge -

/*
let secretNum = 5
let message
output(guesser('Guess a number 1-10'))

function guesser(p) {
	let guess = prompt(p)
	guess = Number(guess)
	if (guess == secretNum) {
		message = `You got it ${secretNum}`
		return message
	} else {
		message =
			guess > secretNum ? `Was higher guess again` : `Was lower guess again`
		return guesser(`[${guess}] ${message}`)
	}
}

function output(mes) {
	document.getElementById('message').innerHTML = mes
}
*/

// - 33 IIFE functions -

/*
let val = '1000'

;(function () {
	console.log('hello')
	let val = '100' // local scope
})()

let result = (function () {
	let val = 'Laurence'
	return val
})()
console.log(result)
console.log(val)

;(function (val) {
	console.log(`My name is ${val}`)
})('Laurence')
*/

// - 34 Arrow Functions JavaScript -s

/*
var test1 = function (x) {
	return x * 5
}
function test3(x) {
	return x * 5
}
const test2 = (x) => {
	console.log(x)
	return x * 5
}

console.log(test1(10))
console.log(test2(10))
console.log(test3(10))
*/

// - 35 JavaScript Objects -

const person = { first: 'Laurence' }
person.last = 'Svekis'
person.age = 40
person.helpful = true
console.log(person)
person.first = 'John'
console.log(person)
// person = 'hello'
person['first'] = 'Lisa'
console.log(person)
let val = 'first'
person[val] = 'Mike'
console.log(person)
let count = 1
person.count1 = 'one'
person.count2 = 'two'
console.log(person['count' + count])
count++
console.log(person['count' + count])
