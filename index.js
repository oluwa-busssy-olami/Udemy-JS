// === & !=
let total = 1 + 3;
console.log(total);

let rating = 3;
if (rating === 3) {
  console.log("rating is equal to 3");
} else {
  console.log("rating is not 3");
}

let age = 16;
let citizen = "Nigerian";
if (age >= 18 && citizen === "Nigerian") {
  console.log("You are eligible to vote");
} else {
  console.log("sorry you have to be above 18 or Nigrian citizen to vote");
}

// const dayOfWeek = prompt('ENTER A DAY') {
//     if (dayOfWeek === "monday") {
//         console.log("I hate mondays")
//     } else if {

//     }
// }

// const password = prompt("please enter a new password");
// if (password.length >= 6) {
//   // console.log("Long Enough Password");
//   if (password.indexOf(" ") === -1) {
//     console.log("valid Password");
//   } else {
//     console.log("password cannot include space");
//   }
// } else {
//   console.log("Password too short  much be 6+ characters");
// }

// const userInput = prompt("Enter something!");
// if (userInput) {
//   console.log("TRUTHY!");
// } else {
//   console.log("FALSY!");
// }

// let firstName = prompt("enter your first name");
// if (!firstName) {
//   firstName = prompt("Try Again!");
// }

const ageGroup = 0;
if (!((ageGroup >= 0 && ageGroup < 5) || ageGroup >= 65)) {
  console.log("YOU AR NOT A BABY BUT A SENIOR");
}
//Truthy and falsy values
//False value ncludes; False; 0, -(empty string ), null, underfined, Nan,
const day = 9;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THRUSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;

  default:
    console.log("NOT A DAY OF THE WEEK");
    break;
}
