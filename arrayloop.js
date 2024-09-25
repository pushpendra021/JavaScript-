
/*
array inside string-->["","",""]
array inside object-->[{},{},{}]


*/
//for of loop
const arr=[1,2,3,4,5];
//  variable name,  of is a keyword, array name arr
for(const num of arr){
    console.log(num);

}

const greetings="Hello World!";
for(const greet of greetings){
    console.log(greet);
}


//Map is a object,it  is a ke-pairs values and remember inserted order
//map provides unique value
const map=new Map();
map.set('IN',"INDIA");
map.set('USA',"United state of America");
map.set('Fr',"France");
console.log(map);

//how to apply for of loop
for(const key of map){
    console.log(key);
}
/*
[ 'IN', 'INDIA' ]
[ 'USA', 'United state of America' ]
[ 'Fr', 'France' ]
*/

//how to print only key
for(const [key] of map){
    console.log(key);
}
/*
IN
USA
Fr
*/

//how to print value
for(const [,value] of map){
    console.log(value);
}
/*
INDIA
United state of America
France
*/

//how to print index and value
for(const [key,value] of map){
    console.log(key,'--->',value);
}
/*
IN ---> INDIA
USA ---> United state of America
Fr ---> France
*/

//how to apply for of loop in object
const myObj={
    game1:'NFS',
    game2:'SpiderMan',

}

/* for of loop not work
error:myObj is not iterable
for(const [key,value] of myObj){
    console.log(key,'--->',value);
}
*/





//for in loop 

const myObject={
    js:'Javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"

}

//for in loop work with object
//how to print all keys of a object
for(const key in myObject){
    console.log(key);
}

//how to print all value of a object
for(const key in myObject){
    console.log(myObject[key]);
}

//how to print key and value
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



//for in loop with array

const programming=["js","java","py","cpp"];

//how to print index
for(const key in programming){
    console.log(key);
}


//how to print values
for(const key in programming){
    console.log(programming[key]);
}

//how to print index and value
for(const key in programming){
    console.log(`${key} ------> ${programming[key]}`);
}

//forEach() loop
//syntax   arrayname.forEach(function (parameter_nam){})

const coding = ["js", "ruby", "java", "python", "cpp"]

//normal function using function keyword
coding.forEach( function (val){
   console.log(val);//print values
} )

//using arrow function
coding.forEach( (item) => {//print values
    console.log(item);
} )

//how to write more effective
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);//print values


//how to print key ,index and value
coding.forEach( (item, index, arr)=> {//o/p formate-->js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    console.log(item, index, arr);
} )


//how to  apply forEach loop in object-->[{},{},{}]
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item); // o/p formate{ languageName: 'javascript', languageFileName: 'js' } and soon
    //console.log(item.languageName);//formate-->javascript and soon
    console.log(item.languageFileName);//formate--->js
} )
