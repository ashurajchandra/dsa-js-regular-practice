// Declare an object
let ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

const flattenArray = (obj)=>{
const result={}
    for(let item in obj){
        if(typeof(obj[item]) == 'object'){
            const temp = flattenArray(obj[item])
            for(const tempKey in temp){
                result[item+ "." + tempKey] = temp[tempKey]
            }
        }else{
            result[item] = obj[item]
        }
       
    }
    return result

}

const finalValue = flattenArray(ob)
console.log("finalValue",finalValue)