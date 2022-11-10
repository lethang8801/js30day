// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr)

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')  // 0

// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// const arr = Array()
// console.log(arr)
// const arr = [1,2,3,4,5]
// console.log(arr[0])
// console.log(arr[Math.floor(arr.length / 2)])
// console.log(arr[Number(arr.length - 1)])

// let mixedDataTypes = [
//   {name: "cac"},
//   {age: 4},
//   {isCheck: true},
//   {a: null},
//   {b: NaN},
// ]
// console.log(mixedDataTypes[0].name)

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// console.log(itCompanies.toString().toUpperCase() + " are big IT companies");
//
// console.log(itCompanies.filter(item => item !== "Facebook"))
// console.log(itCompanies.slice(2))
// console.log(itCompanies.slice(0,itCompanies.length - 3))

// console.log(itCompanies.map((item,index)=> {
//   console.log(Math.floor(itCompanies.length / 2),index)
//   if(Math.floor(itCompanies.length / 2) === index) return;
//   return item;
// }).filter(item => item !== undefined))

// const b = itCompanies.splice(0,Math.floor(itCompanies.length))
// // const a = itCompanies.splice(0,1)
// console.log(itCompanies)

// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.?'
// console.log(text.replaceAll(/[,.?]/gi, '').split(" ").length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift('Meat');
// shoppingCart.push("Sugar")
// shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";
// console.log(shoppingCart);
// console.log(shoppingCart.indexOf('Honey'));

// console.log(countries)
// if (countries.indexOf("Ethiopia")) {
//   console.log("ETHIOPIA");
// } else countries.push("Ethiopia");

// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
//  if (webTechs.indexOf("Sass" || 'sadsad') > 0) {
//   console.log("Sass is a CSS preprocess");
// } else webTechs.push("Sass");
// console.log(webTechs);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// console.log(frontEnd.sort())
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = [...frontEnd, ...backEnd]
// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 26, 26, 24, 25, 24]

// ages.sort();
// console.log(ages);
const min = ages[0];
const max = ages[ages.length-1];
// console.log(min);
// console.log(max);

let len = ages.length;
let median = (ages[parseInt(len/2)-1] + ages[parseInt(len/2)])/2;
const average = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/len
console.log(average);
let range = max - min;
console.log("Range of ages: ", range);
