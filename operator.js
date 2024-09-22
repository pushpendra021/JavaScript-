let value=3;
let negValue=-value;
console.log(negValue);

console.log(2+2); // 4
console.log(2-2);// 0
console.log(2*2);//4
console.log(2**3);//8
console.log(2/3);//0.66
console.log(2%3);//2

let str1="Hello";
let str2="Pushpendra";
let str3=str1+" "+str2;
console.log(str3);

//problem
console.log("1" +2);//12
console.log(1 +"2");//12
console.log("1" +"2");//12

console.log("1" +2+2);//122
console.log(1 +2+"2");//(1+2)+"2"=32

console.log(true);//true
console.log(+true);//1
console.log(+"");//0

//increament operator
let incr=12;
incr++;
console.log(incr);//13
let a=incr;
let b=incr;
console.log(++a);//14
console.log(b++);//13

//comparision operator
console.log(2>=1);//true
console.log(2==1);//false
console.log(2<=1);//false
console.log(2!=1);//true

//comparision operator problem
console.log("2">1);//true
console.log("02">1);//true

console.log(null>0)//false //null->0 >0 no
console.log(null==0)//false // null ->Nan ==0 ye different ways me kaam karta hai javad=script me
console.log(null>=0)//true  //null->0 >=0 yes

//undefined ko haam kisi bhi value ke saath compare kaare to always  give false value
console.log(undefined>0)//false 
console.log(undefined==0)//false
console.log(undefined<0)//false


//=== this operator compare value as well as datatype

console.log("2"===2);//false
