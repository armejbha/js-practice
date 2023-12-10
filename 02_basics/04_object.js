

// const identity= new Object();
const identity={}

identity.email="mejbha@gmail.com"
identity.number="123451"
identity.fullName={firstName:"abdur rahim",lastName:"borkot ullah"}
// console.log(identity.fullName.firstName)

//we can assign object within a object.

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

// console.log(obj3);

const user=[
    {
        id:"123",
        email:"mejbha@gmail.com"
    },
    {
        id:"123",
        email:"mejbha@gmail.com"
    },
    {
        id:"123",
        email:"mejbha@gmail.com"
    }
]

// console.log(Object.keys(identity))
// console.log(Object.values(identity))


// console.log(identity.hasOwnProperty('email'))


// de-structuring use for easy to access data.


const company=(myName)=>{
    console.log(myName)
}

company(myName="mejbha")


// const company={
//     companyName:"beingCoder",
//     value:"500$"
// }

// const {companyName}=company;
// console.log(companyName);