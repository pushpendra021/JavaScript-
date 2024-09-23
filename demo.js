console.log("Hello ,I am pushpendra");


//constant variable
const accountId=12345;
console.log(accountId);
// not allowed accountId=2 ;
console.log(accountId);


//let variable
let accountEmail="pushpendra@gmail.com";
console.log(accountEmail);
 accountEmail="weweeeee";
 console.log(accountEmail);

 //variavle var
var accountPassword="72727";
console.log(accountPassword);
accountPassword="pushpendra";
console.log(accountPassword);

//how to print other ways
var a;//what happen if not assign a value
let b;
console.table([accountEmail,accountId,accountPassword,a,b])

/*
prefer not use var because of issue in block scope and function scope
*/