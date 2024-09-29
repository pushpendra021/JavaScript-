//object part 3

// Object de-structure

const course={
    courseName:"Javascript",
    price:999,
    courseInstructor:"Pushpendra",
}

/* how to optimized it
course.courseName;
course.courseInstructor;
course.price
*/ 


//                 =kaha se aa raha hai->course object
const {courseName}=course;
console.log(courseName);//Javascript

//our kaise optimized kaar sakte hai syntax ko
const {courseName:c}=course;
console.log(c);//Javascript


/*react js me kaise use karte hai object de-structure ko
const navbar=({comapy})=>{

}
navbar(comapy="pk");
*/

//API


/* API with JSON formate
JSON bhi object hi hai but object ka name hota hai lekin JSON ka name nahi hota
declaration

{
"firstname":"PK",
"secondname":"bais",
"id":"2023is16",
}

*/

/* API with array formate

[
{},
{},
{},

]


*/

/*popular api 
randomuserme
mediaapi
*/