// best practice for used to unsure the type data is coming to
let score: number | string = 33;
score = 44;
score = "55";

type UserDefine = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let johnWick: UserDefine | Admin = { name: "John", id: 334 };
johnWick = { username: "jesk", id: 334 };

/* 
function getDbID(id: number | string) {
  // Api Calls
  console.log(`DB id is: ${id}`);
} */
getDbID(3);
getDbID("3");

function getDbID(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}
// * array data can be full Number or a full of String
// const data: number | string[] = [1, 2, 3, "4"];
// ! mixed between number and string but it's NOT RECOMENDED
// const data: (number | string)[] = [1, 2, 3, "4"];

// * default type of data
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
