
// function myFunction() {
//   let age = prompt('Enter your age: ');
//   if (age > 18) {
//     document.getElementById("demo").innerHTML = 'You are old enough to drive'
//   } else {
//     document.getElementById('demo').innerHTML = `You are left with ${18 - age} years to drive.`
//   }
// }

// const compareAge = () => {
//   const myAge = prompt('my age ')
//   const yourAge = prompt('your age ')
//   if (myAge === yourAge) {
//     document.getElementById('demo').innerHTML = 'same age'
//   } else if (myAge < yourAge) {
//     document.getElementById('demo').innerHTML = 'my age < your age'
//   } else {
//     document.getElementById('demo').innerHTML = 'my age > your age'
//   }
// }

// const checkEvenNumber = () => {
//   const number = prompt('Number')
//   // if (number % 2 === 0) {
//   //   document.getElementById('demo').innerHTML = 'true'
//   // } else {
//   //   document.getElementById('demo').innerHTML = 'false'
//   // }
//   {number % 2 === 0 ? document.getElementById('demo').innerHTML = 'true' : document.getElementById('demo').innerHTML = 'false'}
// }

// const checkScores = () => {
//   let score = prompt('Score: ')
//   if (score <= 100 && score >= 80 ) {
//     document.getElementById('demo').innerHTML = "A"
//   } else if (score < 80 && score >= 60){
//     document.getElementById('demo').innerHTML = "B"
//   } else if (score < 60 && score >= 40){
//   document.getElementById('demo').innerHTML = "C"
//   }else if (score < 40 && score >= 20) {
//     document.getElementById('demo').innerHTML = "D"
//   }else if (score < 20 && score >= 0) {
//     document.getElementById('demo').innerHTML = "E"
//   } else {
//     document.getElementById('demo').innerHTML = "Errors"
//   }
// }

// function checkSeason () {
//   let month = prompt("Enter the month: ");
//
//   switch(month) {
//     case "September":
//     case "October":
//     case "November":
//       document.getElementById('demo').innerHTML = 'Autumn'
//       break;
//
//     case "December":
//     case "January":
//     case "February":
//       document.getElementById('demo').innerHTML = 'Winter'
//       break;
//
//     case "March":
//     case "April":
//     case "May":
//       document.getElementById('demo').innerHTML = 'Spring'
//       break;
//
//     case "June":
//     case "July":
//     case "August":
//       document.getElementById('demo').innerHTML = 'Summer'
//       break;
//   }
// }

// function checkDay() {
//     let day = prompt("to day: ").toLocaleLowerCase()
//     switch (day) {
//         case 'monday':
//         case 'tuesday':
//         case 'wednesday':
//         case 'thursday':
//         case 'friday':
//             document.getElementById('demo').innerHTML = "working"
//             break;

//         case 'saturday':
//         case 'sunday':
//             document.getElementById('demo').innerHTML = "weekend"
//     }
// }

/** LEVEL 3 Challenges **/
function checkMonths() {
    let month = prompt("Enter a month: ").toLowerCase();

    // check if it is leap year 
    let d = new Date();
    let year = d.getFullYear();

    if (month == "february") {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) { document.getElementById('demo').innerHTML = '28' }
        document.getElementById('demo').innerHTML = '28'
    } else {
        switch (month) {
            case "january":
            case "march":
            case "may":
            case "july":
            case "august":
            case "october":
            case "december":
                document.getElementById('demo').innerHTML = '31'
                break;

            case "april":
            case "june":
            case "september":
            case "november":
                document.getElementById('demo').innerHTML = '30'
                break;
        }
    }
}
