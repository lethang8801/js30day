// const arr = [1,2,3,4]
// // const getItem = (a) =>{
// //  return arr.map(item => item + a)
// // }
// //
// // function callBackFunction(a){
// //   return  getItem(a)
// //   // return arr.map(item => item + a)
// // }
// // //function goi lai 1 function khac
// //
// // console.log(callBackFunction(1))
//
// const a = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject(arr)
//   },1000)
// })
// //es7 => 2017
// const getArr = async () =>{
//   try {
//     const result = await a
//     console.log("resolve",result)
//   }catch (e){
//     console.log("error",e)
//   }
// }
// getArr()
//
// //es6
// // a.then(value => console.log("resolve",value)).catch(err => console.log("error",err))


// const functionCall = callbackFunciton => {
//   setTimeout(() => {
//     const result = ['HTML', 'CSS', 'JS']
//     const err ='It did not go well'
//     callbackFunciton(err, result)
//   }, 2000)
// }
//
// const callbackFunciton = (err, result) => {
//   if (!result) {
//     return console.log(result)
//   }
//   return console.log(err)
// }
//
// functionCall(callbackFunciton)


// const muabi =(sotien) =>{
//  //luc thanh toan het 2s
//   setTimeout(() => {
//     const tiencuamay = 2000
//     const tientra = 10000
//     sotien(tiencuamay, tientra)
//   }, 2000)
// }
// const sotien =(tiencuamay, tientra)=>{
//   if (tiencuamay > tientra) {
//     const tienthua = tiencuamay - tientra
//     return console.log(tienthua)
//   }else {
//     const tienno = tientra - tiencuamay
//     return console.log(tienno)
//   }
// }
// muabi(sotien)

// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.length > 0) {
//       resolve(skills)
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 2000)
// })
//
// doPromise.then(result => {console.log(result)}).catch(error => console.log(error))

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

//1
// const countriesAPI = 'https://restcountries.com/v2/all'
// fetch(countriesAPI).then(res => res.json()).then(data => console.log(data.map(item => item?.capital))).catch(err => console.log(err))

// setInterval(myFunction, 10);
//
// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//    d.getMilliseconds()
// }


const user = [
  {
    id: 1,
    email: "thang@gmail.com",
    first_name: "Thang",
    last_name: "Le",
  },
  {
    id: 2,
    email: "2@gmail.com",
    first_name: "abc",
    last_name: "asd"
  },
  {
    id: 3,
    email: "qwe@gmail.com",
    first_name: "dsfgdfs",
    last_name: "dsad",
  },
  {
    id: 4,
    email: "dsadsa@gmail.com",
    first_name: "kjh",
    last_name: "hjg",
  },
  {
    id: 5,
    email: "thsdssang@gmail.com",
    first_name: "dsad",
    last_name: "dsadsa",
  },
]
//
// const customUser = user.reduce((acc, cur) => {
//   console.log("acc",acc,cur.email)
//   return {
//     ...acc,[cur.email] : cur
//   }
// },{})

// acc === {}
// acc {
  // {
  // "thang@gmail.com" :{
  //   id: 1,
  //     email: "thang@gmail.com",
  //   first_name: "Thang",
  //   last_name: "Le",
    // }
  // }
// }
//
// console.log('cus',customUser)


const fetchData = async () => {
  const response = await fetch('https://restcountries.com/v2/all');
  const data = await response.json();
  console.log(data.map(item => item?.capital));
};
fetchData()