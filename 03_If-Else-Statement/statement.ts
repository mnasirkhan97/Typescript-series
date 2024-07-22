// console.log('If else statement');

//====> If else

// if (true) {
//     console.log("welcome home");

// } else {
//     console.log('bye');

// }

// if (false) {
//     console.log("welcome home");

// } else {
//     console.log('bye');

// }

// //=====> Condition 01:

// let usrname:string = "nasir";
// let pasword: string = "abc123";

// if (usrname == "nasir") {
//     console.log(`Welcome ${usrname}`);
// }else{
//     console.log('Condition are falsed');

// }

//=====> Condition 02: username me value Capitale letter se likhen age

// let usrname:string = "Nasir";
// let pasword: string = "abc123";

// if (usrname == "nasir") {
//     console.log(`Welcome ${usrname}`);
// }else{
//     console.log('Condition are falsed'); // d=else chaly ga
// }

//=====> Condition 03: username and password donu ko check krna

// let usrname:string = "nasir";
// let pasword: string = "abc123";

// if (usrname == "nasir" && pasword == 'abc123') {
//     console.log(`Welcome ${usrname}`);
// }else{
//     console.log('Condition are falsed');

// }


//================================================================================================================

//======> if, elseif, else 

//====> user : nasir
// let usrname: string = "nasir";
// let pasword: string = "abc123";
// let code:string = "456"

//====> user : khan
let usrname: string = "khan";
let pasword: string = "abcd1234";
let code: string = "4567";

if (usrname == "nasir" && pasword == "abc123") {
  console.log("kindly provide code");
  //==> nested if else
  if (code == "456") {
    console.log('Thank you');
    
    console.log(`Welcome ${usrname}`);
  } else {
    console.log("Invalid code");
  }
  
}
else if(usrname == "khan" && pasword == "abcd1234") {
    console.log("kindly provide code");
    //==> nested if else
    if (code == "4567") {
      console.log('Thank you');
      
      console.log(`Welcome ${usrname}`);
    } else {
      console.log("Invalid code");
    }
}
else {
  console.log("invalid user");
}

//================================================================================================================

//========> Nested If else

// let usrname: string = "nasir";
// let pasword: string = "abc123";
// let code:string = "456"
// // let usrname: string = "Khan";
// // let code: string = "457";

// if (usrname == "nasir" && pasword == "abc123") {
//   console.log("kindly provide code");
//   //==> nested if else
//   if (code == "456") {
//     console.log('Thank you');
    
//     console.log(`Welcome ${usrname}`);
//   } else {
//     console.log("Invalid code");
//   }
// } else {
//   console.log("invalid user");
// }
