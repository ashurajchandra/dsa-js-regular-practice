// Driver code
let str1 = "geeksforgeeks";
let str2 = "forgeeksgeeksdddd";

const checkAnagram = (str1, str2)=>{
 const myMap = new Map();

 for(let i =0 ; i<str1.length; i++){
    const charExist = myMap.get(str1[i]);

    if(charExist !==undefined){
        myMap.set(str1[i], charExist+1 )
    }else{
        myMap.set(str1[i], 1)
    }
 }

 for(let j=0;j<str2.length; j++){
    if(myMap.has(str2[j])){
        myMap.set(str2[j], myMap.get(str2[j])-1)
    }
 }

 const keys = myMap.keys()

 for(let key of keys){
    if(myMap.get(key) !==0){
        return false;
    }
 }
 return true

}

const result = checkAnagram(str1, "forgeeksgeeksdddd")
console.log("result",result)