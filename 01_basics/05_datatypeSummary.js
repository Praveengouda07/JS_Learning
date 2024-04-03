//Primitive(7): number,string,boolean,null,undefined,symbol,bigint

let number = 100;
// console.log(typeof number);

let greet = "good morning"
// console.log(typeof greet);

const largeNum = 1342656778498698695746466n;
// console.log(typeof largeNum);

let isLogged = true;
// console.log(typeof isLogged);

let names;
// console.log(typeof names);

const numbers= null
// console.log(typeof numbers);




//Non-Primitive(3): Array,object,function

let Avengers = ["Ironman","Captain America","Hawkeye"];  //typeof of array =object
//console.log(typeof Avengers);

let obj = {
    callName: "Praveen",   //typeof of object =object
    age: 30,
}
//console.log(typeof obj);

const myFunction =function(){
    //console.log('Hello world');
}
//console.log(typeof myFunction);


//STACK and HEAP Memory
  //****Stack Memory**** */
let myYoutubeName = "PraveenGoudadotcom"

let anotherName= myYoutubeName;
// in Stact memory we will get a copy of original value...what ever changes we did that changes will be on copy value
console.log(anotherName);
console.log(myYoutubeName);

 anotherName= "chaiaurcode"
 
 console.log(myYoutubeName);
 console.log(anotherName);

 //**********Heap Memory**********
 let userOne={
    email:"vicky@gmail.com",
    upi: "985324252@ybl"
 }
let userTwo = userOne;
console.log(userTwo);
//In heap we will get reference value of original value...whatever changes me do will change the original value
userTwo.email("praveen@gmail.com");

console.log(userOne.email);
console.log(userTwo.email);
