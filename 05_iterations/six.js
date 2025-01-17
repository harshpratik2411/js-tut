// const coding = ["c++","java","python","swift"] 
// coding.forEach((items) => {
//     console.log(items);
    
// }) 
  
// const MyNums = [1,2,3,4,5,6,7,8,9,10] 
//  const NewNums= MyNums.filter((num) =>  num >4) 
//  console.log(NewNums);
 // here we can use this directly in a single line and print the numbers greater then 4 

// const MyNums = [1,2,3,4,5,6,7,8,9,10] 
//  const NewNums= MyNums.filter((num) => {
//     return  num >4
// }) 
//  console.log(NewNums); 
 // but if we here use the curly brace or scope in this we have to  return the value then it will show the out if we dont use return it will give the empty array. 

const books = [
    {
      title: "book 1",
      publish: 1967, 
       edition:2005,
       genre:"history",
    },
    {
      title:"book 2",
      publish:1976, 
       edition:2006,
       genre:"non-fiction",
    },
    {
      title: "book 3",
      publish:1984,
       edition:2005,
       genre:"history", 
    },
    {
      title:"book 4",
      publish:1995,
       edition:2009, 
       genre:"non-fiction",
    },  
     
] 
let userBooks = books.filter((book) => book.genre === "history");
userBooks = userBooks.filter((book) =>
     { return book.publish >= 1945
         && book.genre ==="history"
     }); 
     userBooks =userBooks.filter((book) => {
        book.publish >= 1970
     } )

console.log(userBooks);
