
// function randomNumber(min, max) {
//   console.log(Math.floor(Math.random() * (max - min)) + min);
// }
// randomNumber(10,100)

// const text = 'love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(text.search('love').toString());

//
// let targetted_array = [3,4,3,23,452,5,3,3,21,1,5,5];
//
// function countInArray(array, element) {
//   let repeat_count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       console.log(repeat_count++)
//     }
//   }
//   console.log(repeat_count)
// }
//
// countInArray(targetted_array, 3) // will return 4. cuz "3" was repeated 4 times in the targetted_array
// // countInArray(targetted_array, 5) // will return 3. cuz "5" was repeated 3 times in the targetted_array

//cach 1
const text = 'love is the best thing in this world. Some found their love and some are still looking for their love.'
// let pattern = /love/gi
// console.log(text.match(pattern).length)


const words = text.replaceAll('.', '').split(' ')
const findWord = words.filter(i => i === 'love')
console.log(findWord)
const a = text.replaceAll(".", "").split(" ")?.filter(i => i === "love" )
console.log(a.length)
//cach 2
// const love = "love";
//
// const arrayLoveIndex = [];
//
// let index = text.indexOf(love);
//
// while(index >= 0) {
//   index = text.indexOf(love, index + 1);
//
//   arrayLoveIndex.push(index);
// }
// console.log(arrayLoveIndex)
//
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
// console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));




// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/
//
// console.log(txt.match(regEx))