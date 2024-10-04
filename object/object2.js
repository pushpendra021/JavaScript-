
//object part-2
//non-singleton object
const newarr={};
console.log(newarr);//{}
console.log(typeof newarr);//object

//create object through constructor--->singleton object
const tinderUser=new Object();
console.log(tinderUser);//{}
console.log(typeof tinderUser);//object

//how to assign value
tinderUser.id="123anv";
tinderUser.name="sammy";
tinderUser.isLoggedin=false;

console.log(tinderUser);//{ id: '123anv', name: 'sammy', isLoggedin: false }

//how to declare nested object
const regularUser={
    email:"sonu@gmail.com",
    //object inside object
    fullname:{
        userfullname:{
            firstname:"Pushpendra",
            lastname:"Bais",
        }
    }
   
}

//how to access value
console.log(regularUser);
/*{
    email: 'sonu@gmail.com',
    fullname: { userfullname: { firstname: 'Pushpendra', lastname: 'Bais' } }
  }
  */
console.log(regularUser.fullname);//{ userfullname: { firstname: 'Pushpendra', lastname: 'Bais' } }
console.log(regularUser.fullname.userfullname);//{ firstname: 'Pushpendra', lastname: 'Bais' }
console.log(regularUser.fullname.userfullname.firstname);//Pushpendra


//how to merge objects
const obj1={
    1:"a",
    2:"b",
}

const obj2={
    3:"a",
    4:"b",
}

//1st merging method
const obj3={
    obj1,obj2
}

console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//2nd merging method-->assign() is a static method
const obj4=Object.assign(obj1,obj2);
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5=Object.assign({},obj1,obj2);
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }//same output ie {} optional 

//spride operater same as array----------->assign()==spride same o/p
const obj6={...obj1,...obj2};
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//array of object

const users=[
    {
        id:1,
        email:"p@gmail.com",
    },
    {
        id:2,
        email:"pk@gmail.com",
    },
    {
        id:3,
        email:"ppp@gmail.com",
    }
]

//how to access value of array of object
console.log(users[0].id);//1
console.log(users[1].email);//pk@gmail.com


//how to access keys ,values 
console.log(tinderUser);//{ id: '123anv', name: 'sammy', isLoggedin: false }
console.log(Object.keys(tinderUser));//datatype is array-->[ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser));//datatype is array-->[ '123anv', 'sammy', false ]


//entries() method-->each key values make a array
console.log(Object.entries(tinderUser));//[ [ 'id', '123anv' ], [ 'name', 'sammy' ], [ 'isLoggedin', false ] ]


//hasOwnProperty()--->check keys exist or not
console.log(tinderUser.hasOwnProperty('isLoggedin'));//true
console.log(tinderUser.hasOwnProperty('123anv'));//false------>its values

