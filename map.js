
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1=myNumers.map((num)=>num+10);
console.log(newNums1);//[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

const newNums2 = myNumers.map( (num) => { return num + 10})
console.log(newNums2);//[11, 12, 13, 14, 15,16, 17, 18, 19, 20]


//what happen when copare the vale
const newNums3=myNumers.map((num)=>num>5);
console.log(newNums3);//[false, false, false,false, false, true,true,  true,  true,true]


//what happen if value is added in filter same value is return 
const newNums4=myNumers.filter((num)=>num+7);
console.log(newNums4);//[1, 2, 3, 4,  5,6, 7, 8, 9, 10]
// fileter se haam only compare kaar sakte hai add,sub,mult,and divide nahi kaar sakte hai


//what happen if value is compared
const newNums5=myNumers.filter((num)=>num===7);
console.log(newNums5);//[[ 7 ]




// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);