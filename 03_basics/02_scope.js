
let a=10;

if(true){
    let a=30
    // console.log(a);
}
// console.log(a)

// block scope can use gobal scope value but gobal scope cann't use block scope value

function parents(){
    const userName="hitech"
    function child(){
        const childName="chowdhury"
        // console.log(userName)
    }
    // console.log(childName)
    child()
}

parents()

if(true){
    const username="hitech"
    if(true){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website)
}

// console.log(userName)
addOne(5)
function addOne(num1){
    console.log(num1)
}


addTwo(6)

const addTwo=function(num2){
    console.log(num2)
}
