// Always mentioning the type of the Variable
function addTwo(num: number) {
  //   return num + 2;
  return "hello";
}
function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
console.log(myValue);

getUpper("John");
signUpUser("John", "wick@palio.dev", false);
loginUser("h", "hoh@yahoo.com");
export {};
