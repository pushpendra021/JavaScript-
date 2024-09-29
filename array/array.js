//array-->in js array is resizable
//array declaration
const myArray=[10,20,3,50,40];
const heros=["shaktiman","vijaythalapati","joohi"];
const myArray2=new Array(1,2,4,3);

//how to access value
console.log(myArray[0]);//10
console.log(myArray);//[ 10, 20, 3, 50, 40 ]

//methods or properties
myArray.push(100);//value insert at last
console.log(myArray);//[ 10, 20, 3, 50, 40, 100 ]

myArray.pop();//delete last element
console.log(myArray);//[ 10, 20, 3, 50, 40]

myArray.unshift(200);//value insert at begin
console.log(myArray);//[ 200,10, 20, 3, 50, 40] 

myArray.shift();//delete 1st value
console.log(myArray);//[10, 20, 3, 50, 40] 

console.log(myArray.includes(3));//true---->return true if yes other =wise false

console.log(myArray.indexOf(3));//2-->if index is not present then return -1 like(19)-->output is -1
console.log(myArray.indexOf(19));//-1

//.join() ->>>add all the elements of an array into a string
const newarray=myArray.join();
console.log(typeof myArray);//object
console.log(typeof newarray);//string
console.log(myArray);//[ 10, 20, 3, 50, 40 ]-->array formate
console.log(newarray);//10,20,3,50,40--->string type formate output

//slice return copy of a section of an array
//slice original array ko modified nahi kaarta
console.log("A",myArray);//A [ 10, 20, 3, 50, 40 ]
const myn1=myArray.slice(1,3);//last index is not include
console.log(myn1);//[ 20, 3 ]
console.log("B",myArray);//B [ 10, 20, 3, 50, 40 ]
console.log(myArray);//[ 10, 20, 3, 50, 40 ]

//splice-->splice ,slice wale portion ko remove kaar deta hai original array me se
//splice original array ko modified kaar deta hai
const myn2=myArray.splice(1,3);//include last element
console.log("C",myArray);//C [ 10, 40 ]
console.log(myn2);//[ 20, 3, 50 ]
console.log(myArray);//[ 10, 40 ]

