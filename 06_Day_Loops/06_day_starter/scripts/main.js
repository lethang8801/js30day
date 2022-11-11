// console.log(countries)
// for(let i = 0; i <= 5; i++){
//   const a = i + i
//   console.log(a)
// }

// const countries = ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
// let a = countries.charAt(0).toLowerCase() + string.slice(1)
// console.log(a)

// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// let arr =[]
// for(let i = 0; i < numbers.length; i++){
//   arr.push(sum  = sum + numbers[i])
// }
//
// console.log(arr)  // 15

// let sum = 0
// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//   sum = sum + num
//   // can be also shorten like this, sum += num
//   // after this we will use the shorter synthax(+=, -=, *=, /= etc)
// }
// console.log(sum)


// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// let i = 0
// while (i <= 10) {
//   console.log(i)
//   i++
// }

// let i = 0
// do {
//   console.log(i)
//   i = i + 2
// } while (i <= 10)

// for(let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// let i = 0
// do {
//   i++
//   console.log(`${i} x ${i} = ${i*i}`)
// } while (i < 10)

// for(let i = 0; i < 11; i++) {
//   console.log(`${i} x ${i} = ${i*i}`);
// }

// for(let i = 0; i <= 5; i++){
//   console.log(i)
// }

// let i = 0
// while (i < 5) {
//   console.log(i)
//   i++
// }

// do {
//   i++
//   console.log(`${i} x ${i} = ${i*i}`)
// } while (i < 5)


// let numberEven = []
// let numberOdd = []
// for (let i = 0; i < 100; i++) {
//   if(i%2 === 0) {
//     numberEven.push(i)
//   } else {
//     numberOdd.push(i)
//   }
// }
// console.log(numberEven)
// console.log(numberOdd)

// let sum = 0
//
//  for (let i = 0; i <= 100; i++) {
//    sum = sum + i
//  }
//  console.log(sum)
// let even = 1000
// for (let i = 100;  i> -1; i--) {
//   even = even - i
// }
// console.log(even);

// let sumEven = 0;
// let sumOdd  = 0;
// for (let i = 0; i < 101; i++) {
//   if (i%2==0) sumEven += i;
//   else sumOdd += i;
// } console.log(sumEven, sumOdd);

// let randomNumbers = [];
// for (let i = 0; i < 5; i++) {
//   let randNum = Number(Math.floor((Math.PI * Math.random() * 100 + i)))
//   if(randomNumbers.indexOf(randNum) === -1) {
//     randomNumbers.push(randNum);
//   }
// }
// console.log(randomNumbers);

// let alphabets = 'abcdefghijklmnopqrstuvwxyz';
// let randoms = [];
// for(let i = 0; i < 6; i++) {
//   let abc = alphabets[parseInt(Math.random() * 25)]
//   if(i%2 === 0) {
//     randoms.push(i)
//   }
//   else randoms.push(abc)
// }
// console.log(randoms.join(''));

// let rgb = []
// for (let i = 0; i < 3; i++) {
//   const color = Math.floor(Math.random()*265)
//   rgb.push(color)
// }
// console.log(`rgb (${rgb.join()})`)


// let alphanums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
// let n = parseInt(Math.random() * alphanums.length);
// let rands = [];
// for(let i = 0; i <= n; i++) {
//   rands.push(alphanums[Math.floor(Math.random() * alphanums.length) -1]);
// }
// console.log(rands.join(""));

// let allHexCodes = '123456789abcdef';
// let hexChars = [];
// for(let i=0; i<6; i++) {
//   hexChars.push(allHexCodes[parseInt(Math.random()*allHexCodes.length)-1]);
// } console.log('#' + hexChars.join(''));

// let capCountries = [];
// for(const country of countries) {
//   capCountries.push(country.toUpperCase());
// } console.log(capCountries);

// let countryNameLens = [];
// for(const country of countries) {
//   countryNameLens.push(country.length);
// } console.log(countryNameLens);

// let countryData = [];
// for(const country of countries) {
//   let len = country.length;
//   let first3Chars = country.slice(0, 3).toUpperCase();
//   countryData.push([country, first3Chars, len]);
// }
// for (const arr of countryData) {
//   console.log(arr);
// }
let countriesCopy = [];
for (const country of countries) {
  countriesCopy.push(country);
}