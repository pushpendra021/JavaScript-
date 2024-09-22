"use strict"//treat all js code as newer version
console.log("kkkkkkkk");
//alert(3+3); we are using node js not browser

console.log(3+3);
console.log("pushpendra");

let names="pushpendra";//string data type
let age=25 ;//number datatype
let isLoggedIn =false; //boolean data type
//null standalone value it is a representation of empty value
//undefined abhi value assign nahi huyi hai
//symbol =>used for unique ness

console.table([names,age,isLoggedIn]);

//non primitive data type
//object
console.log(typeof "pk");//string
console.log(typeof 123);//number
console.log(typeof false);//boolean
console.log(typeof null);//object
console.log(typeof undefined); //undefined


//datatype interview of point
//primitive data type (call by value)
/*
String
Number
Boolean
null
undefined
Symbol->used for unique
BigInt

*/
//example
const score=10; //number
const scorevalue=100.23; //number
const isLogIn=false; //Boolean
const outSideTemp=null;//object
let useEmail; //undefine
const id=Symbol('123');//symbol
const anotherId=Symbol('123');//su=ymbol //both are treat is different
const bigNumber=1212123456;//number

//non primitive data type (call by reference)
/*
Array
Object
Function

JavaScript is a dynamically typed language, but TypeScript is a statically typed language. 
*/
//Example
const heros=["Shaktiman","Doga","Nagarajun"];//object

let myObj={
    name:"Pushpendra",//object
    age:25,
}

const myFunction=function(){
    console.log("Hello World");//function
}

console.log(typeof bigNumber);