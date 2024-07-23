// ====> Switch case :

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



//=====> Example: 

// let grade:string = "A";  // Your perfomance is Excellent..
// let grade:string = "C"; // You need to work hard on your study
// let grade:string = "B"; // Your perfomance is Good
// let grade:string = "D"  // Please work hard on your study    
// let grade:string = "E"     //Your grade is incorrect

// switch (grade){
//     case "A":
//         console.log('Your perfomance is Excellent..');
//         break;
//     case "B":
//         console.log('Your perfomance is Good');
//         break;
//     case "C":
//         console.log('You need to work hard on your study');
//         break;
//     case "D":
//         console.log('Please work hard on your study');
//         break;
//     default:
//         console.log('Your grade is incorrect');
//         break;
// }



//====> Example 02:

// let marks:number = 88;
let marks:number = 78;

switch (true){
    case marks > 80 && marks<90:
        console.log('your grade is A +');
        break;
    case marks > 70 && marks<80:
        console.log('your grade is A');
        break;
    case marks > 60 && marks < 70:
        console.log('your grade is B');
        break;
    case marks > 50 && marks < 60:
        console.log('your grade is C');
        break;
    default:
        console.log('your number is incorrect');      
}


