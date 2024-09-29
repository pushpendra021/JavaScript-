//Function part 1

//function definition
function saveMyName(){
    console.log("P");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("P");
    console.log("e");
    console.log("n");
    console.log("d");
    console.log("r");
    console.log("a");
}

//  function reference-->saveMyName and ()->execution
//how to function call
saveMyName();

//keyword   function name   parameter
function addNumber(number1,number2){
    console.log(number1+number2)

}

//function name  function execution(argument)
addNumber();//NaN------------->ye sabhi values print ho rahi hai addNumber function ke ander and return undefine ho raha hai
addNumber(2+44);//Nan/
addNumber(2,44);//46
addNumber("2",44)//244--->treate as a string
addNumber(2,"44");//244
addNumber(2,null);//2
addNumber(2,undefined);//NaN

const result=addNumber(3,50);
console.log(result);//undefined-->why because ye kuchh return nahi kaar raha hai


//how to return value from a function and how to print added value outside of a function
function addTwoNumber(number1,number2){
    return number1+number2;

}

const result1=addTwoNumber(23,32);
console.log("result:",result1);//result: 55


// how to other ways define parameters and arguments
function loginUserMessage(username){
    return `${username} just loggedin.`;
}

console.log(loginUserMessage("Pushpendra9630"));//Pushpendra9630 just loggedin.
console.log(loginUserMessage(""));//just loggedin.
console.log(loginUserMessage());//undefined just loggedin.


//how to use if statement inside a function
function loginUserMessage1(username){
          //!username
    if(username===undefined){
        console.log("Please enter a user name.");
        return;
    }
    return `${username} just loggedin.`;
}

console.log(loginUserMessage1("Pushpendra9630"));//Pushpendra9630 just loggedin.
console.log(loginUserMessage1());//inside a function :Please enter a user name.   
                               //outside function:undefined


//how to passed default value in function
function loginUserMessage1(username="Ohm"){
return `${username} just loggedin.`;
}

console.log(loginUserMessage1("Pushpendra9630"));//Pushpendra9630 just loggedin.
console.log(loginUserMessage1());//Ohm just loggedin.


// what happen if many argument but only one parameter
function calculatePrice(num1){
    return num1;
}
console.log(calculatePrice(4))//4
console.log(calculatePrice(100,200,300))//100



//how to resolved above problem is using rest operator or sprite operato----> ...anyparametername
function calculatePrice1(...num1){
    return num1;
}
console.log(calculatePrice1(4))//[ 4 ]
console.log(calculatePrice1(100,200,300))//[ 100, 200, 300 ]-->in the form of array



//how to define other ways parameter
function calculatePrice2(val1,val2,...num1){
    return num1;
}
console.log(calculatePrice1(100,200,300,400,500))//[ 100, 200, 300, 400, 500 ]-->in the form of array


//1method how to passed object in function and how to use it
//1st step object
const user={
    username:"PUSHPENDRA",
    price:1999,
}
//2nd step function definition
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);//user name is PUSHPENDRA and price is 1999



//2nd method create object at the time of function call
handleObject(
    //direct object pass
    {
        username:"PUSHPENDRA",
        price:1999,
    }


);//user name is PUSHPENDRA and price is 1999



//how to pass array into a function
//1st method
const myArray=[1,2,3,4];
function returnParticularValue(getArray){
    return getArray[1];
}
console.log(returnParticularValue(myArray));//2

//2nd method
console.log(returnParticularValue(
    [10,20,30,40]

));//20
