//Date
let myDate=new Date();
console.log(myDate);//print date......>2024-09-23T05:19:54.702Z
console.log(myDate.toString());//print date in string formate-->Mon Sep 23 2024 10:49:54 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Mon Sep 23 2024
console.log(myDate.toLocaleString());//9/23/2024, 10:51:51 AM
console.log(typeof myDate);//Date is a object in javascript
console.log(myDate.getDate());//23
console.log(myDate.getDay());//1->monday
console.log(myDate.getMonth());//8
console.log(myDate.getFullYear());//2024






//                        year month day
let myCreateDate=new Date(2023,0,23);
console.log(myCreateDate.toDateString());//Mon Jan 23 2023


//time
let myTime=Date.now();
console.log(myTime);//1727069348816
console.log(myDate.getTime());//1727069481879
console.log(Math.floor(Date.now()/1000));//1727069632 --->comparision in mili second
console.log(typeof myTime);// object
