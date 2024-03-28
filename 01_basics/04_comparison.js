//Comparison operator : used to compare 2 operands

// console.log(2>0);
// console.log(0>=2);
// console.log(3==0);
// console.log(5<9);
// console.log(5<=4);


//we  should avoid using this type of code(null or undefined)...to increase productivity and make your code clean


// console.log(null <= 0); //here comparison converts null to a number treating as a zero; 
// console.log(null == 0); // Equality check doesn't convert null to zero..it remains same 
// console.log(null <= 3); //here comparison converts null to a number treating as a zero; 

console.log(undefined <= 0);  //in case of undefined, it doesn't convert null  to a number ....in all cases it will give false as a result
console.log(undefined <= 0);
console.log(undefined <= 0);


console.log(3==="3"); //=== : equal and of same type ...it means it compare the value as well as datatypes (also known as identical)

