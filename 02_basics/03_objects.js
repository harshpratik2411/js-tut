// objects 

//   an object is a fundamental data structure that allows you to store collections of data and more complex entities. Objects are key-value stores where keys are strings (or Symbols) and values can be any data type, including other objects.

 const mySym =Symbol ("key1");
const JsUser = {
    name: "Harsh",
    "full name":"Harsh pratik",
[mySym]: "myKey1",
    age: 31,
    location: "up",
    Email: "harhs@123gmail.com",
    isLoggedIn: false,
    LastLoginDays:["monday","saturday"] 
}
   
// console.log(JsUser.Email)
// console.log(JsUser["Email" ])
// console.log(JsUser["full name" ])
// console.log(JsUser[mySym])
  
// freeze method is  used to freeze  the  value which cannot be changed.  
   
//  string in  backticks is know as string interpolation
JsUser.greeting = function() {
    console.log("hello js user");
}
JsUser.greetingTwo = function() {
    console.log(`hello js user , ${this.name}`); 
 
}   
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// we can access js object by dot(.) or we can accesss it by square  bracket 
          

    
