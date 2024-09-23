const name="Pushpendra";
const repoCount=50;
//old dyas
console.log(name+repoCount+" $$$$$");
//modern days
console.log(`Hello my name is ${name} ans my repo is ${repoCount}`);

//another ways how to declared string in javascript

const gameName=new String("Sonu-hcd");// yaha paar haam object choose kaar rahe hai

//string methods and functions
console.log(gameName[0]);//S
console.log(gameName.length);//8
console.log(gameName.toLowerCase());//sonu but not cham=nge original value(original value always be Sonu)
console.log(gameName.charAt(2));//n
console.log(gameName.indexOf('u'));//3

//substring concept
const newString=gameName.substring(0,3);//Son not include index 3
console.log(newString);

//slice concept
const anotherString=gameName.slice(0,4);//it also take a negative value (if value is negative  ie start in reverse)
console.log(anotherString);//sonu

const anotherString1=gameName.slice(-6,4);
console.log(anotherString1);//nu

//trim method->remove white spaces

const newStringTrim="  pushpendra    ";
console.log(newStringTrim);//  pushpendra    
console.log(newStringTrim.trim());//pushpendra


//replace method
const url="https://pushpendra.com/pushpendra bais";
// mai space ko %20 me replace karna chahta hoo.                
console.log(url.replace(' ','%20'));//https://pushpendra.com/pushpendra%20bais
//check string in=s present or not
console.log(url.includes('bais'));//true

//split method ->split a stirng based on specific symbol
console.log(gameName.split('-'));//[ 'Sonu', 'hcd' ]