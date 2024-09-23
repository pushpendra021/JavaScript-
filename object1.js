//Objects literals
//singleton-->jaab bhi haam literal ki taraha declare kaarte hai to singleton nahi banta
/*constructor se banegaa tho hamesh singleton banega
how to create
Object.create();

*/

/*
symbol concept 
Q) ek symbol lo usko object ki keys me add karo our mujhe print kaar ke dikha do

*/

//how to declare symbol
const mySymbol=Symbol("keys1");


//Object literals---->symbol-->{keys,values}
const jsUser={
    name:"Pushpendra",
    age:25,
    rollnumber:16,
    location:"MNNIT-Allahabad",
    email:"p@gmail.com",
    lastlogin:["Monday","Saturday"],
    "full name":"Pushpendra Kumar Bais",
    //symbol keys me add kaise kaare
    [mySymbol]:"makekey1",
}


//how to access the value
//1st method .dot notation
console.log(jsUser.email);//p@gmail.com
console.log(jsUser.location);//MNNIT-Allahabad
//console.log(jsUser.full name);// can not work its given error 
//better ways use 2nd method


//2nd method -> square notation[]
console.log(jsUser["email"]);//p@gmail.com
console.log(jsUser["location"]);//MNNIT-Allahabad
console.log(jsUser["full name"]);//Pushpendra Kumar Bais
//how to print symbol
console.log(jsUser[mySymbol]);//makekey1



//how to change value of object
jsUser.email="pushpendrabais@gmail.com";
console.log(jsUser["email"]);//pushpendrabais@gmail.com

//how to freezee ->means haam change ko kaise rok sakte hai object ki using freeze concept
Object.freeze(jsUser);
jsUser.email="2020is16@mnnit";
console.log(jsUser);//no changes
/*
{
  name: 'Pushpendra',
  age: 25,
  rollnumber: 16,
  location: 'MNNIT-Allahabad',
  email: 'pushpendrabais@gmail.com',///////////////////
  lastlogin: [ 'Monday', 'Saturday' ],
  'full name': 'Pushpendra Kumar Bais',
  [Symbol(keys1)]: 'makekey1'
}
*/

//how to add function in object
jsUser.greeting=function(){
    console.log("Hello js User,how are you?");
}

console.log(jsUser.greeting);//undefined
console.log(jsUser.greeting());//Hello js User,how are you?


//important
jsUser.greetingTwo=function(){
    //                                      iske through object ke kisi bhi particuler key ko access kaar sakte hai
    console.log(`Hello js User,how are you? ${this.name}`);
}
console.log(jsUser.greetingTwo());//Hello js User,how are you? Pushpendra