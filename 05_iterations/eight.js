 //The reduce method calls the callbackfn function one time for each element in the array. 
 
const  MyNums =[1,2,3,4,5] 
// const MyTotal =MyNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)  

const MyTotal = MyNums.reduce((acc,currval) =>(acc+currval,0))
console.log(MyTotal);
// both the code is same but the this is the smart way to use the reduce fn and the upper portion of the code is done by using noramal function