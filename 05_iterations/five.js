// const coding = ["js","ruby","java","python","cpp"] 
// coding.forEach( function(value){
//     console.log(value);
    
// })  
 //this method is uses normal function  


 //const coding = ["js","ruby","java","python","cpp"] 

// coding.forEach( (items) => {
//     console.log(items);
          // forEach also has the access of the  index,arr.\
// }) 
// this method uses arrow function. 
// both the output will be same 
  
//  function printMe(items){
//     console.log(items);
    
//  }
// coding.forEach(printMe) // here we are passing the refrence of funtion. 
 
// coding.forEach( (items,index,arr)=> {
//     console.log(items,index,arr);
    
// }) 


const myCoding = [
    {
       languageName : "javascript" ,
       languagefilename: "js"
    },
    {
       languageName : "java" ,
       languagefilename: "java"
    },
    {
       languageName : "python" ,
       languagefilename: "py"
    },
] 
 myCoding.forEach((item)=>{
  // console.log(item.languagefilename);
   console.log(item.languageName);
   
 }) 
