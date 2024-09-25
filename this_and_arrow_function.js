/*this keyword-->refers to the current context
this keyword refers to an object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/

const user={
    username:"Pushpendra",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`);//Pushpendra, Welcome to website
      //  console.log(this);
    }
}

 user.welcomeMessage;//run to hoga lekin kuchhh print nahi hoga-->blanck screen
 user.welcomeMessage();//Pushpendra, Welcome to website

 user.username="sam";
  user.welcomeMessage();//sam, Welcome to website-->current context-->this keyword ke karan




// ----------        inqueary1        ------------
/*
line no --16  console.log(this);//us current context me kya kya run kiye hai




output
Pushpendra, Welcome to website
{
  username: 'Pushpendra',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam, Welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}



*/

//jabline number 20,21,23,24 ko comment kaar de console.log(this)run karennge to kya hoga
console.log(this);//{}
//jab line no 16 ko comment kaar de and line number 20,21,23,24 comment na kare taab console.log(this)run karennge to kya hoga

console.log(this);
/*
Pushpendra, Welcome to website
sam, Welcome to website
{}
*/


//when this print inside a function
function coffee(){
    console.log(this);
}
coffee;//blanck screen
coffee();//bahut sara output


//-----important1-----
function chai(){
    let username11="sk";
    console.log(this.username11);
}
chai();//undefined


//-----important2-----
const chai2=function(){
    let username11="sk";
    console.log(this.username11);
}
chai2();//undefined



//Arrow function

const chai3=()=>{
    let user123="Pushpendra";
    console.log(this.user123);
}
chai3();//undefined


/////-----inquery
const chai4=()=>{
    let user123="Pushpendra";
    console.log(this);
}
chai4();//{}


//Aroow function syntax----> ()=>{}
//ist way define   {}-->use kiya to return compalsory hai likhna padega
    const addTwo=(num1,num2)=>{
        return num1+num2;
    }
    console.log(addTwo(10,12));

//implicite define
const addTwo1=(num1,num2)=> num1+num2;
console.log(addTwo1(10,12));//22

//implicite me confusion ho skta hai to bachne ke liye haam parenthesis laaga sakte hai but return nahi likhana hai
const addTwo2=(num1,num2)=> (num1+num2);
console.log(addTwo2(10,12));//22

//how to return object in arraow function

const addTwo3=(num1,num2)=> ({username:"Oham"});
console.log(addTwo3(10,12));//{ username: 'Oham' }
