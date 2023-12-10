
function myFirstFunction(name){
    return console.log(`${name} My first function`);
    
}
// const result = myFirstFunction("mejbha");

// console.log("result:",result)

// function addTwoNumber(num1,num2){
//     console.log(`${num1} ,${num2}`)
//     return num1+num2;
// }

// const result =addTwoNumber(3);
// console.log("result:",result);


function logIn(userName){
if(userName===undefined){
    console.log("please enter a proper value")
    return
}
return `${userName} is my name`
}
// logIn("mejbha")
// console.log(logIn())

function cartMYShopping(val1,val2,...num1){
    return num1
}
// console.log(cartMYShopping(2,300,400,400))

const valueObject={
    myName:"mejbha",
    price:345
}

function returnMyValue(anyObject){
    return `${anyObject.myName} is my name and ${anyObject.price}$ it my car price`
}

// console.log(returnMyValue({
//     myName:"mejbha",
//     price:345
// }))

const myArr=[3,35,56]
function checkArry(myArr){
    return myArr[0]
}

console.log(checkArry(myArr))



