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

//5
// const swapValue = (a,b) => {
//   return [b,a];
// }
// console.log(swapValue(1,2))

//6

// const reverseArray = (arr) =>{
//   return arr.reverse()
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))

// const reverseArray = (arr) =>{
//   return arr.sort((a,b)=> (b - a))
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))

//7
// const capitalizeArray = (arr) => arr.map(cac => cac.toUpperCase())
//
// console.log(capitalizeArray(["a","b"]))

//8

// const addItem = (params) => {
//   const arr = ["a","b"]
//   arr.push(params)
//   return arr
// }
// console.log(addItem("c"))

//9
// const removeItem = (params) => {
//   const arr = ["a", "b"]
//   return arr.filter(item => item !== params)
// }
// console.log(removeItem("a"))

//10

// const sumOfNumbers = (arr) => {
//   const sum = 0
//   return arr.reduce((previousValue, currentValue) => previousValue + currentValue, sum)
// }
// console.log(sumOfNumbers([1,2,3,4,5]))



// in ra những số có “số đầu tiên là số lẻ”
// const num =[889, 100, 546, 1001, 2022, 5, 79, 68, 99999, 4687]
//
// // const arr = () =>{
// //   num.map(item => {
// //     console.log(Math.floor((item / Math.pow(10, (item.toString().length - 1)))) % 2)
// //
// //     if(Math.abs((item / Math.pow(10, (item.toString().length - 1)))) % 2){
// //       return item
// //     }
// //     return
// //   })
// // }
// // console.log(arr())
//
// for(let i= 0; i< num.length; i++ ){
//
// }

//11
// const sumOfOdds = (arr) => {
//   let odds = arr.filter(item => item % 2)
//   return odds.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
// }
// console.log(sumOfOdds([1,2,3,4,6]))

//12
// const sumOfEven = (arr) => {
//   let even = arr.filter(item => item % 2 === 0)
//   return even.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
// }
// console.log(sumOfEven([1,2,3,4,6]))


// [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
//   return previousValue + currentValue // 10
// })


//11 cach 2
// const newArr = []
// const sumOfOdds = (arr) => {
//   for (let i = 0; i < arr.length ; i++) {
//     if(arr[i] % 2 !== 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
// }
// console.log(sumOfOdds([1,2,3,4,5,6]))

//15
// function generateIP () {
//   let a = parseInt(Math.random() * 100);
//   let b = parseInt(Math.random() * 255);
//   let c = parseInt(Math.random() * 255);
//   let d = parseInt(Math.random() * 255);
//
//
//   return `${a}.${b}.${c}.${d}`;
// }
//
// console.log(generateIP())

//16
function randomMacAddress () {
  return Math.floor(Math.random() * 100)
}

// console.log(randomMacAddress())

function genMAC(){
  const hexDigits = "0123456789ABCDEF";
  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
    macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
    if (i !== 5) {
      macAddress = macAddress + ":";
    }
  }

  return macAddress;
}

console.log(genMAC());