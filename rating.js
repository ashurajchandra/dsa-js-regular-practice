//WRT A function that takes an array of string and count non repeating character of a word and a word with max length return as a rating rating


const arr = ["hello","world", "meet","my","brother"]

const findMaxRating = (arr) =>{
    let splitArr
    const resultArray = []
for (item of arr){
    splitArr  = item.split('')   
    const seenItem = {}
    for(let i = 0; i<splitArr.length; i++){
        if(seenItem[splitArr[i]] !==undefined){
            splitArr.splice(i,1)
            resultArray.push(splitArr.length)
        }else{
            seenItem[splitArr[i]] = true
        }
    }
}
return Math.max(...resultArray)
}

const result = findMaxRating(arr);

console.log("result",result)