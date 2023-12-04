//date is javascript object

// const myDate=Date.now();
// console.log(myDate.toString())

// const myDate=new Date('2023-12-3');
// myDate.setDate(23);
// console.log(myDate);

// console.log(new Date().toLocaleString('default' ,{
//     weekday:'short'
// }))

const asiaDhaka = new Date().toLocaleString([], { timeZone: "Asia/Dhaka" });
console.log(asiaDhaka);