// IFFE(immediatly iinvoked function expression)
    
// function chai () {
//     console.log(`db connected`);
    
// }  
//  chai()
(function chai () { 
    // here function chai is name IFFE  
    console.log(`db connected`);
    
}  
 ()) ;  //  here semicolon is compulsory to end the line  
(function aurcode ()  {
    console.log(`db connected two`);
    
}  
 ())  
(function aurcode (name)  {
    console.log(`db connected two ${name}`);
    
}  
 ("harsh"))  