const arr = ["a","b","d","a","e","f","a","d"];


// find unique occurence

const result = arr.reduce((acc, curr)=> curr in acc? {...acc, [curr]:acc[curr]+1}:{...acc,[curr]:1} , {})
console.log("result",result)


const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

const employeesResult = employees.reduce((acc, current)=>


{
    // const resultVal = []
    const {name, salary, bonus, tax} = current
    const updatedEmployee = {}
       updatedEmployee.name = name;
       updatedEmployee.netEarning = salary + bonus - tax
   
       acc.push(updatedEmployee)
       return acc
}

,[])
console.log("employeesResult",employeesResult)

const numArray = [1,2,3,4,5,6,7]

const resultArray = numArray.reduce((acc,current)=> 
{
    if(current % 2 ==0){
        // {"even":acc+current}
        acc.even = (acc.even || 0) + current
        // console.log("current-even",acc+current)
    }else{
        // console.log("current-odd",acc+current)
        acc.odd = (acc.odd || 0) + current
        
        // {"odd": }

    }
    return acc
}
,{})

console.log("resultArray",resultArray)


let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

const uniqueAgeGroup = ageGroup.reduce((acc,current)=>{
 if(acc.indexOf(current) === -1){
    acc.push(current)
 }
 return acc
},[])

console.log("uniqueAgeGroup",uniqueAgeGroup)

const numbers = [1, 2, 3, 4, 5, 6];
const resultNumbers =  numbers.reduce((acc,current)=> acc + current, 0)

console.log("resultNumbers",resultNumbers)

//find duplicate and return number
const num = [1,3,4,2,2]
const seenNum = {};
let duplicate;
for(const item of num ){
   console.log("seenNum[item]",seenNum[item])
if(seenNum[item]){
    console.log("item",item)
    duplicate = item
    console.log("item",item)
}else{
    seenNum[item] =true
}
}

console.log("duplicate",duplicate)

const num1 = [1, 3, 4, 2, 2];
const seenNumbers = {};
const duplicates = [];

for (const current of num1) {
    if (seenNumbers[current]) {
        duplicates.push(current);
    } else {
        seenNumbers[current] = true;
    }
}

console.log("Duplicates: ", duplicates);

