

const mySym= Symbol("key1");

const person ={
    name:"abdur rahim",
    age:24,
    ambition:"Tech analysis",
    "email":"mejbha@gmail.com",
    [mySym]:"mykey1"
}

// console.log(person.name)
// console.log(person["name"]);
// console.log(person["email"]);
// console.log(typeof person[mySym]);
// console.log(typeof mySym);
// console.log(person);

// Object.freeze(person);

person.name= "abul kalam";
// console.log(person)

person.travel=function(){
    console.log("i love to travel");
}

// console.log(person.travel)

person.invite=function(){
    console.log(`i want to invite ${this.name} and his address is ${this.ambition}`)
}

// console.log(person.invite())