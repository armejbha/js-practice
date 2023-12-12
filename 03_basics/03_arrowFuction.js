
const user={
    myName:"mejbha",
    price:345,
    welcomeMessage:function(){
        console.log(`${this.myName} is welcome to this website`)
        console.log(this)
    }
}
// user.myName="abul"
// user.welcomeMessage()

const userActive={
    logIn:function(){
        console.log(this)
    }
}
// userActive.logIn();
// console.log(this)

function addTwo(){
    console.log(this)
}

// addTwo()

const myArr=()=> {
    console.log(this)
}

// myArr()

// immediatellly invoke function 

(function getUser(){
    console.log("hi")
})();

(()=>{
    console.log("mejbha")
})()