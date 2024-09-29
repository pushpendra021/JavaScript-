//nested scope
function one(){
    const userName="pushpendra";
    function two(){
        const website="Youtube";
        console.log(userName);
    }
    //console.log(website); error
   //two();//pushpendra
}
one();//jab haam Two ko comment kaar dete hai to wo call nahi hota


if(true){
    const name="Sonu";
    if(name==="Sonu"){
        const web="Bais";
        console.log(name+" "+web);//Sonu Bais
    }
    //console.log(web); //error out of scope
}
//console.log(name);// error out of scope

console.log(0.1+0.2===0.3);
//false, JavaScript uses the IEEE 754 standard for floating-point arithmetic,
//When you add 0.1 + 0.2, the result is actually 0.30000000000000004 (not exactly 0.3) because of precision errors in binary floating-point arithmetic.

//how many ways function written
//1st way
function addNum(num){
    return num+1;
}
console.log(addNum(5));//6

//2nd way
const addTwo=function(num){
    return num+1;
}
console.log(addTwo(5));//6




/////---------- important----------------//////////
console.log(addNum1(5));//105
function addNum1(num){
    return num+100;
}

/*
Givven error : Cannot access 'addTwo1' before initialization
console.log(addTwo1(5));//6
const addTwo1=function(num){
    return num+1;
}

*/
