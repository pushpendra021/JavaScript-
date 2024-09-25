//if statement
console.log("If statement");
const isUserLoggedIn=true;
if(isUserLoggedIn){
    console.log(isUserLoggedIn);
}

//comparision operator  <,<=,>,>=,==,====,!==
console.log("Comparision operator");
if(3==3){
    console.log(" 3==3 Is equal :yes");//Is equal :yes
}

if(3=="3"){
    console.log("Is equal :yes");//Is equal :yes
}

if(3!=2){
    console.log(" 3!=2 Is not equal :yes");//3!=2 Is not equal :yes
}


if(3===3){
    console.log("3===3 is equal: Yes");//3===3 is equal: Yes
}

//not executed or ouput is false
if(3==="3"){
    console.log("True");//false
}
if(3!=="3"){
    console.log("Is Not equal");//Is Not equal
}
console.log("Comparision operator end");

const balance=1000;
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");//less than 1200

}


//Logical Operator
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {// && --> all condioton is true--> condition if false then not execute
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {//any one condition is true-->then execute
    console.log("User logged in");//less than 1200
}