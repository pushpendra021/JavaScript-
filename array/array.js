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






console.log(myArray.includes(3));//true---->return true if yes otherwise false



console.log(myArray.indexOf(3));//2-->if index is not present then return -1 like(19)-->output is -1
console.log(myArray.indexOf(19));//-1




//.join() ->>>add all the elements of an array into a string--------->if convert number into string in an array ------->join()
const newarray=myArray.join();
console.log(typeof myArray);//object
console.log(typeof newarray);//string
console.log(myArray);//[ 10, 20, 3, 50, 40 ]-->array formate
console.log(newarray);//10,20,3,50,40--->string type formate output







//slice return copy of a section of an array------>slice() creates a new array with a portion of elements copied from the original array
//slice original array ko modified nahi kaarta
console.log("A",myArray);//A [ 10, 20, 3, 50, 40 ]
const myn1=myArray.slice(1,3);//last index is not include
console.log(myn1);//[ 20, 3 ]
console.log("B",myArray);//B [ 10, 20, 3, 50, 40 ]
console.log(myArray);//[ 10, 20, 3, 50, 40 ]

//some more example
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));// Expected output: Array ["camel", "duck", "elephant"]


console.log(animals.slice(2, 4));// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 6));// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));// Expected output: Array ["camel", "duck"]

console.log(animals.slice());// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]








//splice-->splice
//splice original array ko modified kaar deta hai


/*
splice(start)
splice(start, deleteCount)--------->An integer indicating the number of elements in the array to remove from start.
splice(start, deleteCount, item1)----------->The elements to add to the array, beginning from start.



*/
console.log(myArray);
//const myn2=myArray.splice(1,2);//0th index se 2 element delete kaar do(including zero)//      C [ 10, 50, 40 ]
const myn2=myArray.splice(0,2);//C [ 3, 50, 40 ]
console.log("C",myArray);//C [ 10, 40 ]
console.log(myn2);//[ 20, 3, 50 ]
console.log(myArray);//[ 10, 40 ]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');// Replaces 1 element at index 4
console.log(months);// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(2);//Remove all elements, starting from index 2
console.log(months);//[ 'Jan', 'Feb' ]