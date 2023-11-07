/* 
*Object Property Filtering*: 
Given an object with properties representing different 
types of fruits and their quantities, write a program to
 filter out fruits with quantities below a certain threshold.
*/

const fruits = [
    {
        name:"Apple",
        quantity:20
    },
    {
        name:"Orange",
        quantity:25
    },
    {
        name:"Banana",
        quantity:40
    },
    {
        name:"waterMelon",
        quantity:05
    }
]



const filterFruits=()=>{
    const filteredFruits = []
for(const fruit of fruits){
    if(fruit.quantity <30){
        filteredFruits.push(fruit)
    }
}
const sortedByQty = filteredFruits.sort((a,b)=>a.quantity - b.quantity)
console.log("sortedByQty",sortedByQty)
return sortedByQty
}

const result = filterFruits(fruits)
console.log("result",result)