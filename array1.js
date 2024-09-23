//Array part 2
const marvelheros=["thor","ironman","spiderman"];
const dcheros=["superman","flash","batman"];

console.log(marvelheros);
console.log(dcheros);

//push()-->jaab haam ek array me 2nd error push karte hai
//if you want inside an array
//its change original array
marvelheros.push(dcheros);//array inside arrays
console.log(marvelheros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelheros[1]);//ironman
console.log(marvelheros[3]);//[ 'superman', 'flash', 'batman' ]
console.log(marvelheros);

//concat()
//no changes in original array
//its return new arrays
const south=["Vijaythalapati","gopi sai","shiva ji the boss"];
const bh=["Ajaydewgan","salmankhan","govinda"];
console.log(south);//[ 'Vijaythalapati', 'gopi sai', 'shiva ji the boss' ]
console.log(bh);[ 'Vijaythalapati', 'gopi sai', 'shiva ji the boss' ]
const heros=south.concat(bh);
console.log(south[1])//gopi sai
console.log(south[4]);//undefined
console.log(south);//[ 'Vijaythalapati', 'gopi sai', 'shiva ji the boss' ]
console.log(heros);
/*
[
  'Vijaythalapati',
  'gopi sai',
  'shiva ji the boss',
  'Ajaydewgan',
  'salmankhan',
  'govinda'
]
*/

//sprit operator -->todna ek glash lo our usko gira do to waah tutjayegaa
//               ... make each element individualy
const newheros=[...south,...bh];
console.log(newheros);
/*
[
  'Vijaythalapati',
  'gopi sai',
  'shiva ji the boss',
  'Ajaydewgan',
  'salmankhan',
  'govinda'
]
*/

//flat()-->convert all depth into a single array
const arr=[1,2,3,[10,20,30],100,200,[6,7,[888,999]]];

console.log(arr);//[ 1, 2, 3, [ 10, 20, 30 ], 100, 200, [ 6, 7, [ 888, 999 ] ] ]
const newarr1=arr.flat(1);//1st depth
console.log(newarr1);//[ 1, 2, 3, 10, 20, 30, 100, 200, 6, 7, [ 888, 999 ] ]


const newarr2=arr.flat(2);//2nd depth
console.log(newarr2);
//[1,   2,   3, 10, 20,30, 100, 200,  6,  7,888, 999]


//is present on array or not
console.log(Array.isArray("batman"));//false

//string make a array
console.log(Array.from("PUSHPENDRA"));
//['P', 'U', 'S', 'H','P', 'E', 'N', 'D','R', 'A']

//interesting case
//jaab haam object ke keys ka array or values kaa array banayenge ye haame batana padtha hai
console.log(Array.from({name:"PUSHPENDRA"}));//empty array because ye isko convert nahi kaar paa raha hai kyu ki haamne isko nahi bataya ki kiska array banana hai values or keys


//of()-->returns a new array from set of all element
let score1=100;
let score2=200;
let score3=300;
let score4=400;
console.log(Array.of(score1,score2,score3,score4));//[ 100, 200, 300, 400 ]