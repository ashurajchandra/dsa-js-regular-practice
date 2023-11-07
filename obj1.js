//Object Property Sum*: Write a program that takes an object representing expenses,
// where the keys are expense categories (e.g., "food," "rent")
// and the values are amounts spent in each category.
 //Calculate the total sum of expenses.

 const expenses = {
    food: 200,
    rent: 1000,
    transportation: 250,
    entertainment: 150,
  };

  //find total sum of expenses
  let result = 0;
  for(key in expenses){
   
    console.log("expenses[key]",expenses[key])
    result =result + expenses[key]
   
  }

  console.log("result",result)



  /*

   *Object Property Modification: Write a program that takes an object representing a 
   user profile with *`username`*, *`email`*, and *`age`* properties.
    Modify the object to add a new property called *`isActive`* and set it to *`true`**.

  */

    const userInfo = {
        username:"Ashutosh",
        email:"ashu@gmail.com",
        age:20,

    }

    function modifyObject(obj){

       obj.isActive = "true"
       return obj

    }

    const resultObj = modifyObject(userInfo)
    console.log("resultObj",resultObj)