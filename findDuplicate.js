// const nums = [1,3,4,2,2]


// const findDuplicate = function(nums) {
//     const myMap = new Map()

//     for(let i = 0; i<nums.length; i++){
//         const element = myMap.get(nums[i])
//         if(element){
//             console.log("element",element)
//             if(nums[i] ==element){
//                 return nums[i]
//             }
            
//         }else{
//              myMap.set(i, nums[i])
//         }
//     }
// };

// const result = findDuplicate(nums)
// console.log("result",result)

const nums = [1, 3, 4, 2, 2];
const target = 7

const findDuplicate = function(nums) {
    const myMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = myMap.get(nums[i]);
        if (element !== undefined) { // Use strict inequality '!=='
            console.log("element", element);
            if (nums[i] === element) { // Use strict equality '==='
                return nums[i];
            }
        } else {
            myMap.set(nums[i], nums[i]); // You should set the element itself, not the index.
        }
    }
    return -1; // Return -1 if no duplicates are found.
};

const result = findDuplicate(nums);
console.log("result", result);

// const nums = [1, 3, 4, 2, 2];
// const target = 7
// const findIndexes = (nums,target)=>{
//     const myMap = new Map();

//     for(let i = 0; i<nums.length; i++){
//         const remainValue = target - nums[i]
//         const element = myMap.get(nums[i]);

//         if(element !== undefined){
//             if(element == remainValue){
//                 // return [i , remainValue]
//             }
//         }
//     }
// }