const score=400;
console.log(score)//400


//if you assigned fixed type of number type
const balance=new Number(200);
console.log(balance);//[Number: 200]

//toString()->convert number to string
console.log(balance.toString());//200
console.log(balance.toString().length);//3

//toFixed() ->used for how many digits you want to add after point like toFixed(2)=200.00
console.log(balance.toFixed(2));//200.00




//toPrecision return a string with rounded value
const otherNumber=123.4956;
console.log(otherNumber.toPrecision(3));//123
console.log(otherNumber.toPrecision(4));//123.5



//toLocaleString()->>return us standard value 
const hundred=1000000;
console.log(hundred.toLocaleString());//1,000,000
console.log(hundred.toLocaleString('en-IN'));//10,00,000 //indian standard


//+++++++++  maths  +++++++++++

console.log(Math);//it a object---->Object [Math] {}
console.log(Math.abs(-23));//23
console.log(Math.round(25.3));//25
console.log(Math.round(25.7));//26
console.log(Math.ceil(25.3));//26
console.log(Math.floor(25.7));//25
console.log(Math.min(100,34,55,3));//3
console.log(Math.max(100,34,55,3));//100
console.log(Math.random());//value between 0 to 1
console.log((Math.random()*10)+1);//value like 0.010 bhi ho sakta hai to is case ko remove karne ke liye haam +1 karte hai

//if you want to value between 10-20 how to find
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);//floor value between 10--20
