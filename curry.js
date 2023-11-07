
function myCurry(a){
    console.log("parent-arg",arguments.length,arguments)
    return function(b){
        console.log("first-child-arg",arguments.length,arguments)
        return function(c){
            console.log("last-child-arg",arguments.length,arguments)
            return a*b*c
        }
    }
}


const result = myCurry(2)(4)(6)(8);
console.log("result",result)