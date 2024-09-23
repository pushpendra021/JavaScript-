// stack (primitive data type),Heap (non-primitive)
 //    |                        |
//    copy milta hai             address  milta hai original value ka


//stack
let myName="Pushpendra";
let anotherName=myName;
anotherName="Sonu";
console.log(myName);//Pushpendra
console.log(anotherName);//Sonu

//Heap
let userOne={
    email:"user@yahoo.com",
    upi:"user@paytm",
}

let userTwo=userOne;
userTwo.email="pk@gmail.com";

console.log(userOne.email);//pk@gmail.com
console.log(userTwo.email);//pk@gmail.com