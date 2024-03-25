const accountId = 12222789;
var acctName = "vicky";
/*
Prefer not to use "var" because of issue in block and functional scope
*/
let EmailId = "vicky@123";
//accountId = 131414;

EmailId = "pinky@123";
console.log(EmailId);
console.log(accountId);

console.table([accountId, acctName, EmailId]); // use console.table to print output in table form
