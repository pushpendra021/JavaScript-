//var-->
//const-->
//let-->
/*
var declarations are globally scoped or function scoped while let and const are block scoped.
var variables can be updated and re-declared within its scope; 
let variables can be updated but not re-declared;
 const variables can neither be updated nor re-declared.



*/

//1st ways global scope
let a1=10;
const b1=20;
var c1=30;
console.log(a1);//10
console.log(b1);//20
console.log(c1);//30

//2nd ways local scope
if(true){
    let a=10;
    const b=20;
    var c=30;

}
//console.log(a); create a proble because its scope is inside if statement
//console.log(b); create a proble because its scope is inside if statement
console.log(c);//30


//3rd ways global and local
let a2=10;
const b2=20;
var c2=100;
if(true){
    //a2=100; updation is not allowed
   // b2=200; pdation is not allowed
     c2=999;

}
//console.log(a); //create a proble because its scope is inside if statement
//console.log(b); //create a proble because its scope is inside if statement
console.log(c2);//999

//4th block scope and local scope
let a3=111;
const b3=222;
var c3=333;
if(true){
    let a3=444;
    const b3=555;
    var c3=666;
    console.log("Inner scope",a3);
    console.log("Inner scope",b3);
    console.log("Inner scope",c3);
    /*
Inner scope 444
Inner scope 555
Inner scope 666
    */

}
console.log("Outer scope",a3);
console.log("Outer scope",b3);
console.log("Outer scope",c3);
/*
Outer scope 111
Outer scope 222
Outer scope 666
*/