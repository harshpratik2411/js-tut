  const user = {
     username: "harsh",
     price: 999, 

     welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        
     }
  }  
  user.welcomeMessage() 
  user.username = "sam" // here we have changed the value of context thats why the output will be sam ,welcome to website
  user.welcomeMessage()
   