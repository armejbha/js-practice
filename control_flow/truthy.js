// false value: false, 0,-0,null,undefiend,NaN,BigIn 0n,""

// truthy value:true,"false","0"," ",{},[],function(){},

const isuserEmail="false";

if(isuserEmail){
    console.log("Give permison to enter")
}


// nullish coalesing operator ?? 

const val1=23 ?? 40
const val2=null?? 40

console.log(val1)
console.log(val2)

// terniary operator  :  condition ?true : flase

const temp=34

temp>30 ? console.log("this is right") : console.log("This is not right")