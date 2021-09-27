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

let val = prompt('what number?')
val = Number(val)
let num = 100
let message = 'nothing'
if (val > num) {
	message = `${val} was greater than ${num}`
} else if (val == num) {
	message = `${val} was equal to ${num}`
} else {
	message = `${val} is less than ${num}`
}

document.getElementById('message').innerHTML = message
