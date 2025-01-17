 

//  const arr = [1,2,3,4,5] 

//  for (const num of arr) {
//     console.log(num);
    
//  } 

//  const greetings = "hello world"
//  for (const greet of greetings) { 
//     console.log(`each char is ${greet}`);
//  } 

 const map = new Map()
 map.set("Ind","India")
 map.set("USA","United States of America")
 map.set("Fr","France") 
 
 //console.log(map); 
 
 for (const [Key,value] of map) { 
     console.log(Key ,':-', value);
      
 }
//    const myObject = {
//     "game1": "NFS",
//     "game2": "IGI" 
//    } 
//     for (const  [Key,value]of myObject) { 
//         console.log(Key,':-',value);
        
        
//     }