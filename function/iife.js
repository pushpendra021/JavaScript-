//how to write iife----syntax-->function ko parenthesis me daal do  --->(function chai(){})();

//why iife is required
/*
Global scope ke polution se problem hoti hai kaai baar to us gloabl scope ke jo variable
hai or jo variable declare hai usko haatane ke liye IIFE kaa use kaarte hai

*/



/* our function
function chai(){
    console.log(`DB is connected`)
}
*/

//called named IIFE
(function chai(){
    console.log(`DB is connected`)
})();

//IIfe using arrow function
//called non nemed iife or arroe iife
(()=>{
    console.log(`Db is connected`);
})();

//IIFe using arrow function with variable
((name)=>{
    console.log(`Db is connected to ${name}`);
})("RAMESH");