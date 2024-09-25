let val1=10;
let val2=20;
function addNum(num1,num2){
    let total =num1+num2;
    return total;
}

let result1=addNum(val1,val2);
let result2=addNum(11,22);

/*
how to execute this code
1 global execution ----allocate to-->this

2 memory phase (all variables are stored)
   val1---->first show-->undefined(variable ke ander undefined jaata hai and function ke ander definition jaata hai)
   val2---->first show-->undefined
   addNum-->definition
   result1-->undefined
   result2-->undefined

   cycle 1st completed

3 execution phase
  val1=10(stored value)
  val2=20
  result1------addNum -->ke liye allag se new execution context ready hota hai--->jiske ander (new environment + execution thread hota hai)
                                           |                            

                           phir se memory phase and execution phase hoga

   return karne ke baad memory allocation delete( ho jata haiaddNum memory allocation delete)
result2------addNum -->ke liye allag se new execution context ready hota hai--->jiske ander (new environment + execution thread hota hai)
                                           |                            

                           phir se memory phase and execution phase hoga

   return karne ke baad memory allocation delete( ho jata haiaddNum memory allocation delete)


*/

// call stacks---->how to store function in stack (same as c++ concept)
