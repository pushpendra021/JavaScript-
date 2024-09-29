let score="30aa";
console.log(typeof score);
console.log(typeof(score));
console.log(score);

//Number class  convert score into number data type

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);//return NaN because score not a pure number (pure number is 30)


let score1="30";
console.log(typeof score1);
console.log(typeof(score1));
console.log(score1);

//Number class  convert score into number data type

let valueInNumber1=Number(score1);
console.log(typeof valueInNumber);
console.log(valueInNumber1);//return 30


let score2=null;
console.log(typeof score2);
console.log(typeof(score2));

//Number class  convert score into number data type

let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);//return 0

let score3=undefined;
console.log(typeof score3);
console.log(typeof(score3));

//Number class  convert score into number data type

let valueInNumber3=Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);//return NaN


let score4=true;
console.log(typeof score4);
console.log(typeof(score4));

//Number class  convert score into number data type

let valueInNumber4=Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);//return 1
//how number class work
// "33"->33;
// "33ab"->NaN
// null->0;
// undefine->NaN;
// true->1


console.log("Boolean class");
let login=1;

let booleanlogin=Boolean(login);
console.log(typeof  booleanlogin);
console.log( booleanlogin);//return true


let login1="";

let booleanlogin1=Boolean(login1);
console.log(typeof  booleanlogin1);
console.log( booleanlogin1);//return false
//Boolean class working
//1--->true;
//0--->false;
//""--->false;
//"Pushpendra"---->true;

let str=33;
console.log(typeof str);
let stringstr=String(str);
console.log(typeof  stringstr);
console.log( stringstr);//return string
