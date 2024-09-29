//forEach loop kabhi bhi kuch return nahi kaarta
// Agar haam forEach loop mke andaar return likhte hai to undefine output me detaa hai-->eg line no 30
const coding = ["js", "ruby", "java", "python", "cpp"]

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

//forEach loop with array
coding.forEach( (item)=>{//print all values
  console.log(item);
})

myCoding.forEach( (item)=>{
    console.log(item.languageName);//print all language name
    console.log(item.languageFileName);//print all language file name
  })

//forEach return undefined
const values=coding.forEach( (item)=>{//print all values
    return item;
  })
console.log(values);//undefined


//--------filter method----------syntax arrayname.filter(arrw function then some conditions)
const myNumber=[1,2,3,4,5,6,7,8,9,10];
const newNum=myNumber.filter((num)=>num>4);
console.log(newNum);//[ 5, 6, 7, 8, 9, 10 ]

//what happen
const newNum1=myNumber.filter((num)=>{
    num>4
})
console.log(newNum1);//[]


//what happen if using return keyword
const newNum2=myNumber.filter((num)=>{
     return num>4          
})
console.log(newNum2);//[ 5, 6, 7, 8, 9, 10 ]

//[{},{},{}]
const books = [
    { 
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004 
    },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (book) => book.genre === 'Fiction')
  console.log(userBooks);

 let userBooks1 = books.filter( (book) => { 
    return book.publish >= 1995 && book.genre === "History"
})
  console.log(userBooks1);
