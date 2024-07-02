function addTwo(num: number): number {
  return num + 2;
}

/* 
function getValue(myVal:number): boolean{
    if (myVal > 5){
        return true
    }
    return "200 OK"
} */

// * Arrow Function
const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman", 1, 2];
// const heros = [1,2,3]
let loopData = heros.map((hero): string => {
  return `hero is ${hero}`;
});
// console.log(loopData);

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// * Always using type of never when handling the Error
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export {};
