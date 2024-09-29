// for

// print 1 to 10 numbers
for(let i=1;i<=10;i++){
    console.log(i);
}

//print array element
let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    
}


// print any paricular element
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    
}




// print all element and any element occure exactly twice
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        console.log("7 is best number");
    }
    console.log(element);
    
}


// nested for loop

for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 5; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
   }
    
}

//print multiplication table

for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
   console.log(i + '*' + j + ' = ' + i*j );
   }
    
}


// break keyword

//detect index 7
for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log(`Detected  index ${index}`);
        break
    }
    
}

//continue keyword

//print all index except multiple of 5(skip index 5,10,15,20)
let i=1;
for (let index = 1; index <= 20; index++) {
    if (index == (i*5)) {
        i++;
        console.log(`continue`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}