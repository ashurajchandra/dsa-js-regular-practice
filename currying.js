function findVolume(length){


        return function(height){
            return function(breadth){
                return height*length*breadth
            }
        }
    

}
console.log(findVolume(2)(4)(8))
const result = findVolume(2)(4)(8)

console.log("result",result)