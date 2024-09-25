//while loop

//print odd number
let index = 1
while (index <= 10) {
    console.log(`${index} is odd number`);
    index = index + 2
}


//print array element
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// print 10 to 1 using do while loop
let score = 10
do {
    console.log(`Score is ${score}`);
    score--
} while (score>0);
 