// this is your main.js script


// let b = prompt("Enter base: ");
// let h = prompt("Enter height: ");
// console.log("The area of the triangle is ", 0.5 * parseFloat(b) * parseFloat(h));

// const a = prompt("Enter base: ", "20")
// const b = prompt("Enter base: ", "20")
// const c = prompt("Enter base: ", "20")
//
// console.log("chu vi tam giac: ", Number(a) + Number(b) + Number(c))
function promptMe(){
  const a = prompt("Enter base: ", "20")
  const b = prompt("Enter base: ", "20")
  return Number(a) + Number(b)
}

function findTotal(){
  const arr = document.getElementsByName('qty');
  let tot=0;
  for(let i=0;i<arr.length;i++){
    if(parseInt(arr[i].value))
      tot += parseInt(arr[i].value);
  }
  document.getElementById('total').value = tot;
}

const namsinh = "1998"
const date = new Date()
console.log(typeof namsinh)
console.log(typeof date.getFullYear())
console.log(`${date.getFullYear() - namsinh}`)

