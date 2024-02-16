console.log("Hello World");
//write a js function to convert fahreinheit to celsius
//learn about
/*
id 
name 
value
types
class
placeholder
*/
const gender = "male";

if (gender === "male") {
  console.log("Gender is male");
} else {
  console.log("Gender is female");
}
//js proram to show the  result of current month
//get month using date method

const today = new Date().getMonth();

switch (today) {
  case 1:
    console.log("Current month is February.");
    break;

  default:
    console.log("Invalid Month");
}
//checks whether the user is u or not
const checkName = (user, systemUser) => {
  if (user !== systemUser) return false;
  return true;
};
const result = checkName("Des", "ALex");
console.log({ result });
