/* switch statement
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month = "april";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
         break;
    case "april":
        console.log("april");
         break;

    default:
        console.log("default case match");
        break;
}

// Agaar haam break key word ka use nahi karte to jaaha paar value match hota hai 
//waaha se sabhi ko print kaar deta hai



//True and false value

//1st case 
const userEmail ="pushpendra@gmail.com";
console.log(typeof userEmail);//String

if (userEmail) {//check condition --->userEmail is present or not -->yes present output-->Got user email 
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


//2nd case
const userEmail1 ="";//empty string
console.log(typeof userEmail);//String

if (userEmail1) {//check condition --->userEmail is present or not -->not present because its empty string -->condion false --> output-->Don't have user email
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


const userEmail2 = [];//empty array
console.log(typeof userEmail);//string

if (userEmail2) {//empty array is truethy value-->o/p-->Got user email
     console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
/*

"0", ------->string inside zero
'false'---->string inside false
 " ", ----->string inside space
 [], ------>empty array
 {},------>empty object
function(){}-->empty function

*/
if (userEmail2.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//           -------------------important-----------------------
if(false==0){
    console.log("Treu");//o/p :True
}

if(false==''){
    console.log("Treu");//o/p :True
}
if(0==0){
    console.log("Treu");//o/p :True
}
if(0==''){
    console.log("Treu");//o/p :True
}

if(false==false){
    console.log("Treu");//o/p :True
}

// Nullish Coalescing Operator (??): null , undefined
//case 1
let val1;
 val1 = 5 ?? 10
console.log(val1);//5


//case2
let val2;
val2 = null ?? 10
console.log(val2);//10

//case3
let val3;
val3 = undefined ?? 10
console.log(val3);//10

//case4
let val4;
val4 = null ?? 10 ?? 20//10
console.log(val4);



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")