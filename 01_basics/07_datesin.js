  let myDate = new Date();
//   console.log(myDate);
  console.log(myDate.toString());
  console.log(myDate.toDateString());
  console.log(myDate.toLocaleString());
  // the return  type of the date  is object

  let myCreateDate = new Date (2024,0,23)
//   console.log(myCreateDate.toDateString);
  

  let myTimeStamp = Date.now()  
//   console.log(myTimeStamp);
//   console.log(myCreateDate.getTime()); 
//  console.log(Math.floor(Date.now()/1000));

  let newDate = new Date()
   console.log(newDate);
   console.log(newDate.getMonth());
   console.log(newDate.getDay());
   
   newDate.toLocaleString ('default',{
      weekday: "long" 
   } )