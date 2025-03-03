const Mynumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = Mynumbers.map((num) => num+10)  

  const newNums= Mynumbers
           .map((num) => num*10)
           .map((num) => num +1) 
           .filter((num)=> num >= 40 ) 
 console.log(newNums);
 // the output is [
 // 11, 21, 31, 41,  51,
 // 61, 71, 81, 91, 101
//]    
//here we can use to many maps and filter on one another  


