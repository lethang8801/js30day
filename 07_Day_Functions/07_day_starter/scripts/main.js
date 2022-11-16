// function fullName() {
//   const firstName = "le"
//   const lastName = "thang"
//   const fullName = firstName + lastName
//   return document.getElementById('demo').innerHTML = fullName
// }

// const addNumbers = () => {
//   let one = prompt("one")
//   let two = prompt("two")
//   const total = Number(one) + Number(two)
//   return document.getElementById('demo').innerHTML = `${total}`
// }

// const areaOfRectangle = () => {
//   const length = prompt("length")
//   const width = prompt("width")
//   const area = Number(length) * Number(width)
//   return document.getElementById('demo').innerHTML = `${area}`
// }

// const areaOfRectangle = (length, width) => {
//   const area = Number(prompt(length)) * Number(prompt(width))
//   return document.getElementById('demo').innerHTML = `${area}`
// }

// const calculatedBMI =  (weight, height) => {
//   const bmi = Number(prompt("weight", weight)) / Math.pow((Number(prompt("height", height))) /100, 2)
//   if (bmi < 18.5) {
//     return document.getElementById('demo').innerHTML = `${bmi} Underweight`
//   } else if (bmi < 24.9) {
//     return document.getElementById('demo').innerHTML = `${bmi} Normal weight`
//   } else if (bmi < 29.9) {
//     return document.getElementById('demo').innerHTML = `${bmi} Overweight`
//   } else {
//     return document.getElementById('demo').innerHTML = `${bmi} Obese`
//   }
// }

// const checkSeason = () => {
//   const monthDay = Number(prompt("monthDay"))
//   if (monthDay < 4) {
//     return document.getElementById('demo').innerHTML = 'Spring'
//   } else if (monthDay < 7) {
//     return document.getElementById('demo').innerHTML = 'Summer'
//   } else if (monthDay < 10) {
//     return document.getElementById('demo').innerHTML = 'Autumn'
//   } else {
//     return document.getElementById('demo').innerHTML = 'Winter'
//   }
// }

//15
// const findMax = (a,b,c) => {
//   if(a >= b && a >= c) return a
//   if(b >= c && b >= a) return b
//   return c
// }
// const checkSeason = () =>{
//   const a = Number(prompt("a"))
//   const b = Number(prompt("b"))
//   const c = Number(prompt("c"))
//   const result = findMax(a,b,c)
//   return document.getElementById('demo').innerHTML = result
// }


// function promptForNumber(text) {
//   if(text === '' ){
//     text = "Please enter a number from 1 to 100";
//   }
//   let number = parseInt(window.prompt(text, ""));
//   checkNumber(number);
//
// }
// function checkNumber(number){
//   if (number <= 100 && number >= 1) {
//     document.write("Your number (" + number + ")  matches requirements", "");
//   } else if (isNaN(number)) {
//     promptForNumber("It is not a number. Please enter a number from 1 to 100", "");
//   } else {
//     promptForNumber("Your number (" + number + ") is not between 1 and 100", "");
//   }
//
// }

//lv2
// 3
// const printArray = () => {
//   const a = Number(prompt("a"))
//   const b = Number(prompt("b"))
//   const c = Number(prompt("c"))
//   const abc = [a,b,c]
//   return document.getElementById('demo').innerHTML = abc
// }

//4
// const showDateTime = () => {
//   const today = new Date();
//   const YYYY = today.getFullYear();
//   let MM = today.getMonth() + 1; // Months start at 0!
//   let DD = today.getDate();
//   let hh = today.getHours()
//   let mm = today.getHours()
//
//   if (DD < 10) DD = '0' + DD;
//   if (MM < 10) MM = '0' + MM;
//   if (hh < 10) hh = '0' + hh;
//   if (mm < 10) mm = '0' + mm;
//
//   const formattedToday = DD + '/' + MM + '/' + YYYY + ' ' + hh + ":" + mm;
//
//   document.getElementById('demo').innerHTML = formattedToday;
// }