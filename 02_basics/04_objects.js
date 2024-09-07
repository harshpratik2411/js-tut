//   const TinderUser = new Object () // ==> it is a singleton object   const TinderUser = {}
//   console.log(TinderUser);
//     TinderUser.id = "ABC123"
//     TinderUser.name = "Harsh"
//     TinderUser.isLoggedIn = true

//     console.log(TinderUser)  
//         const RegularUser = {
//          email: "harsh123@gmail.com",
//       fullname: {
//          firstname: "Harsh",
//          lastname: "pratik"
//         }
//    }   
//        console.log(RegularUser.fullname);
       
 
 
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
//  const obj4 = {5:"a",6:"b"} 

//    // The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// //    const obj3 = Object.assign ({},obj1,obj2,obj4);
// //    console.log(obj3);
   
//    const obj3 = {...obj1, ...obj2, ...obj4,}
//    console.log(obj3);
   

//    console.log(Object.keys(TinderUser));
   
const course = {
    coursename: "js",
    coursefee: "1000",
    courseInstructor: "Harsh"
}
//    console.log(course);
   
const {courseInstructor} = course 
console.log(courseInstructor);
  // kind of JSON example 

//   {
//     "name": "harsh",
//     "class": "12", 
//       "id": "41536"
//   }
//     [
//         {}
//         {}
//     ]