//reduce method------>using arrow function
const myNumber=[1,2,3];

const mynTotal=myNumber.reduce((accumulator,currentValue)=>
     accumulator+currentValue,0//initial me accumulator me 0 strore hoga and currentvalue me 1-->then accumulator=0+1,and curr=2-->then accu=1+2 and curr=3
)
console.log(mynTotal);

const shoppingCart=[
    {
        itemName:"Js cource",
        price:999
    },
    {
        itemName:"py cource",
        price:1999
    },
    {
        itemName:"Mobile cource",
        price:9999
    },
    {
        itemName:"Data Scientist",
        price:921
    },

]
//                          store intire array          accumalator initial value
 //                                     |                  |
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);