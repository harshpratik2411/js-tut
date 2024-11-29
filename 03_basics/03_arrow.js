//   const user = {
//      username: "harsh",
//      price: 999, 

//      welcomeMessage: function () {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
        
//      }
//   }  
//   user.welcomeMessage() 
//   user.username = "sam" // here we have changed the value of context thats why the output will be sam ,welcome to website
//   user.welcomeMessage() 
    console.log(this);
     
   //  const Add = (num1,num2) => {
   //     return num1+num2 
   //  }  
   //   console.log(Add(4,6)) 

     const Add = (num1,num2) => num1+num2  
     console.log(Add(4,6)) 
      // this is implicit return in this proccess  we are not required to  write the return in  but if we use curly braces we have to compuslory write the word return 
 

      //  In React, a dependency refers to a variable or value that a component or hook relies on to function correctly. Here's a breakdown of dependencies in different contexts  
      
      